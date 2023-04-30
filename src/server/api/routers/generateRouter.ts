import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { Configuration, OpenAIApi } from "openai";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { env } from "~/env.mjs";
import { b64Image } from "~/data/image";
import AWS from "aws-sdk"

const BUCKET_NAME = "icon-ai-ev"
const BUCKET_REGION= "eu-central-1"
const s3 = new AWS.S3({
  credentials: {
    accessKeyId: env.ACCESS_KEY,
    secretAccessKey: env.SECRET_ACCESS_KEY
  },
  region: "eu-central-1"
})

const configuration = new Configuration({
  apiKey: env.DALLE_API_KEY
})

const openai = new OpenAIApi(configuration)

async function generateIcon(prompt: string): Promise<string | undefined> {
  if(env.MOCK_DALLE === "true") {
    return b64Image
  } else {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
      response_format: "b64_json"
    })
    return response.data.data[0]?.b64_json;
  }

}

export const generateRouter = createTRPCRouter({
  generateIcon: protectedProcedure
  .input(
    z.object({
      prompt: z.string()
    })
  )
  .mutation(async({ctx,input}) => {
    console.log("working", input.prompt)

    const {count} = await ctx.prisma.user.updateMany({
      where: {
        id: ctx.session.user.id, /// replace with real id
        credits: {
          gte: 1
        }
      },
      data: {
        credits: {
          decrement: 1
        }
      }
    })

    if( count <= 0) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message:"not enough credits"
      })
    }

    const base64EncodedImage = await generateIcon(input.prompt)

    const icon = await ctx.prisma.icon.create({
      data: ({
        prompt: input.prompt,
        userId: ctx.session.user.id
      })
    })

    await s3.putObject({
      Bucket: "icon-ai-ev",
      Body: Buffer.from(base64EncodedImage!, "base64"),
      Key: icon.id,
      ContentEncoding: "base64",
      ContentType: "image/png"
    }).promise()
    return {
      imageUrl: `https://${BUCKET_NAME}.s3.${BUCKET_REGION}.amazonaws.com/${icon.id}`
    }
  })
});

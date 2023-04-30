import { env } from "~/env.mjs";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import Stripe from "stripe"

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15"
})

export const checkoutRouter = createTRPCRouter({
createCheckout: protectedProcedure
.mutation(async({ ctx }) => {
return await stripe.checkout.sessions.create({
    success_url: `${env.HOST_NAME}/success`,
    cancel_url: `${env.HOST_NAME}/cancel`,
    line_items: [{price: env.PRODUCT_ID, quantity: 2}],
    mode: "payment",
    metadata: {
        userId: ctx.session.user.id
    },
    payment_method_types: ["card"]
})


})
})
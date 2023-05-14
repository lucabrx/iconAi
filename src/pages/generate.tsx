import Image from 'next/image';
import { useState, type FC } from 'react';
import Button from '~/components/Button';
import Field from '~/components/Field';
import Input from '~/components/Input';
import { api } from '~/utils/api';

interface GenerateProps {
  
}

const colors = [
    {
        name: "blue",
        color: "3B82F6",
    },
    {
        name: "red",
        color: "EF4444",
    },
    {
        name: "pink",
        color: "EC4899",
    },
    { 
        name: "green",
        color: "10B981",
    },
    {
        name: "orange",
        color: "F59E0B",
    },
    {
        name: "yellow",
        color: "FCD34D",
    },
    {
        name: "white",
        color: "FFFFFF",
    },
    {
        name: "black",
        color: "121212",
    },
  ];
  const styles = [
    "Claymorphic",
    "3d rendered",
    "Pixelated",
    "Illustration",
  ];
  const shapes = [
    {
        name: "square",
        css : "h-12 w-12",
    },
    {
        name: "circle",
        css : "h-12 w-12 rounded-full",
    }
];


const Generate: FC<GenerateProps> = ({}) => {
    const [error, setError] = useState("");
    const [imagesUrl, setImagesUrl] = useState<{ imageUrl: string }[]>([]);
    const [form, setForm] = useState({
        prompt: "",
        color: "",
        shape: "",
        style: "",
        numberOfIcons: "1",
      });
    

    const generateIcon = api.generate.generateIcon.useMutation({
        onSuccess(data) {
          setImagesUrl(data);
        },
        onError(error) {
          setError(error.message);
        },
      });

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
       setError("");
        generateIcon.mutate({
          ...form,
          numberOfIcons: parseInt(form.numberOfIcons),
        });
       }

       function updateForm(key: string) {
        return function (e: React.ChangeEvent<HTMLInputElement>) {
           setForm((prev) => ({
             ...prev,
             [key]: e.target.value,
           }));
         };
       }
  return (
<section className="w-full flex justify-center items-center pb-4">
<div className="max-w-[1200px] flex flex-col  justify-center items-center w-full px-[16px]">
<h2 className="font-medium w-full text-center  text-4xl text-bg-dark dark:text-bg-light pt-6">
Generate Your Icons
</h2>
<p className="mb-12 text-lg text-center text-text-sec-light dark:text-text-sec-dark">
Fill out the form below to start generating your icons.
</p>

<form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
<h2 className="text-lg text-bg-dark dark:text-bg-light">
            1. Describe what your want your icon to look like.
          </h2>
          <Field>
            <label>Prompt</label>
            <Input
                placeholder="Describe your icon"
              required
              value={form.prompt}
              onChange={updateForm("prompt")}
            ></Input>
          </Field>

          <h2 className="text-xl text-bg-dark dark:text-bg-light">2. Pick your icon color.</h2>
          <Field className="flex">
          <div className='flex flex-wrap w-full gap-4 justify-center' >
            {colors.map((color) => (
            
              <label key={color.name}  className="flex  justify-center items-center flex-col  text-2xl">
                <div className='flex items-center justify-center gap-2 '>
                <input
                  required
                  type="radio"
                  name="color"
                  
                  checked={color.name === form.color}
                  onChange={() => setForm((prev) => ({ ...prev, color: color.name }))}
                ></input> 
                <div className={`  w-12 h-12 rounded-md  border-2 border-my-gray-500 dark:border-my-gray-200 shadow-sm`} 
                style={{backgroundColor: `#${color.color}`}}
                />
                </div>

                
              </label>
             
            ))}
             </div>
          </Field>

          <h2 className="text-xl text-bg-dark dark:text-bg-light">3. Pick your icon shape.</h2>
          <Field className="flex w-full">
            <div className='flex justify-center w-full items-center gap-4'>
            {shapes.map((shape) => (
              <label key={shape.name} className="flex justify-center items-center gap-2 text-2xl">
                <input
                  required
                  type="radio"
                  name="shape"
                  checked={shape.name === form.shape}
                  onChange={() => setForm((prev) => ({ ...prev, shape : shape.name }))}
                ></input>
                <div  className={`${shape.css} border-2 border-my-gray-200 dark:border-my-gray-500 shadow-md`}/>
              </label>
            ))}
            </div>
          </Field>

          <h2 className="text-xl text-bg-dark dark:text-bg-light">4. Pick your icon style.</h2>
          <Field className="flex">
            {styles.map((style) => (
              <label key={style} className="flex gap-2  text-lg">
                <input
                  required
                  type="radio"
                  name="style"
                  className='-mt-1'
                  checked={style === form.style}
                  onChange={() => setForm((prev) => ({ ...prev, style }))}
                ></input>
    
                {style}
           
              </label>
            ))}
          </Field>

          <h2 className="text-xl text-bg-dark dark:text-bg-light">5. How many do you want. <span className='text-lg font-normal'>
             (1 token 1 Icon)
            </span></h2>
          <Field className="mb-2">
            <label >Number of icons</label>
            <Input
              inputMode="numeric"
              pattern="[1-9]|10"
              value={form.numberOfIcons}
              required
              onChange={updateForm("numberOfIcons")}
            ></Input>
          </Field>

          {error && (
            <div className="rounded bg-red-500 p-8 text-xl text-white">
              {error}
            </div>
          )}

            <Button
            isLoading={generateIcon.isLoading}
            disabled={generateIcon.isLoading}
          >
            Submit
          </Button>
</form>

{imagesUrl.length > 0 && (
          <>
            <h2 className="text-xl text-bg-dark dark:text-bg-light pt-4">Your Icons</h2>
            <section className="flex justify-center flex-wrap">
              {imagesUrl.map(({ imageUrl }) => (
                <Image
                  key={imageUrl}
                  src={imageUrl}
                  alt="an image of your generated prompt"
                  width="512"
                  height="512"
                  className="w-full"
                />
              ))}
            </section>
          </>
        )}

</div>
</section>
)
}

export default Generate
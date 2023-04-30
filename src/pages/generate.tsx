import { type NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, FormEvent, useState } from 'react';
import Field from '~/components/Field';
import Input from '~/components/Input';
import { api } from '~/utils/api';



const Generate: NextPage = ({}) => {
    const [form,setForm] = useState({
    prompt: ""
})

const generateIcon =  api.generate.generateIcon.useMutation({
        onSuccess () {
            console.log("successfully mutated")
        }
})

function updateForm(key: string) {
    return function(e:ChangeEvent<HTMLInputElement> ) {
        setForm((prev) => ({
            ...prev,
        [key]: e.target.value
        }))
    }
}

function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
   generateIcon.mutate({
     prompt: form.prompt
   })
}
  return (
<>
<Head>
<title>Generate Icon</title>    
</Head> 
<main className='flex min-h-screen flex-col items-center justify-center'>
<form 
onSubmit={handleSubmit}
className='flex flex-col space-y-4'>
<Field>
<label>Prompt</label>
    <Input 
    value={form.prompt}
    onChange={updateForm("prompt")}
    />
</Field>
    <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>Submit</button>
</form>
</main>
</>
)
}

export default Generate
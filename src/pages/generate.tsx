import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '~/components/Button';
import Field from '~/components/Field';
import Input from '~/components/Input';
import { api } from '~/utils/api';



const Generate: NextPage = ({}) => {
    const session = useSession()
    const [form,setForm] = useState({
    prompt: ""
})

const generateIcon =  api.generate.generateIcon.useMutation({
        onSuccess () {
            console.log("successfully mutated")
        }
})

const isLoggedIn = !!session.data

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
{
    !isLoggedIn &&
    <Button onClick={() => signIn("google").catch(console.error)}>Login</Button>
}
{
    isLoggedIn &&
    <Button onClick={() => signOut().catch(console.error)}>Logout</Button>
}
<p>{session.data?.user.name}</p>
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
    <Button >Submit</Button>
</form>
</main>
</>
)
}

export default Generate
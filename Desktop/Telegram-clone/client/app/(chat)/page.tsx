"use client";
import { Loader2 } from "lucide-react"
import ContakList from "./_components/contact-list"
import ContacList from "./_components/contact-list"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentContact } from "@/hooks/use-current";
import AddContact from "./_components/add-contact";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { emailSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";

const HomePage = () => {
  const router = useRouter()

  const contactForm = useForm<z.infer <typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  });

  const{currentContact, setCurrentContact}=useCurrentContact()
  useEffect(()=>{
    router.replace('/')
    
  },[])
const onCreateContact=(values:z.infer<typeof emailSchema>)=>[
  // \
  console.log(values)
  
]
  return (
    <>
    {/* Sedbar */}
      <div className="w-80 h-screen border-r fixed inset-0 z-50">
        {/* Loading */}
        {/* <div className="w-full h-[95vh] flex justify-center items-center">
          <Loader2 size={50} className="animate-spin"/> 
        </div> */}

        {/* Contact list */}
        <ContacList contacts ={contacts}/>
      </div>
      {/* Chat area */}
      <div className="pl-80 w-full">
        {/* Add contact */}
{!currentContact?._id && <AddContact  contactForm={contactForm} onCreateContact={onCreateContact}/>}
        {/* chat */}
        {currentContact?._id && <div>Chat</div>}
      </div>
      </>
  )
}

const contacts =[
  {  email:'john@gmail.com', _id:'1', avatar:'https://github.com/shadcn.png'},
  {  email:'Adxam@gmail.com', _id:'2'},
  {  email:'Islom@gmail.com', _id:'3'},
  {  email:'Abbos@gmail.com', _id:'4'},
  {  email:'Shoxjaxon@gmail.com', _id:'5'},

]
export default HomePage
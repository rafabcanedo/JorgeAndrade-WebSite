import React from 'react';
import { BookOpen, ChatCenteredText, Chats, Handshake, PenNib } from 'phosphor-react';
import { Title } from './Title';

const Services = () => {
 return(
 <section>
  <Title title="Se conectando a mim" />

  <div className="container mx-auto">
  <div className="grid lg:grid-cols-4 gap-10">

   <div className="bg-dark p-6 rounded-2xl">
    <div className="text-primary rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
     <BookOpen />
    </div>
    <h4 className="text-white text-xl font-roboto mb-2">Name</h4>
    <p className="text-white">Description</p>
   </div>
   
   <div className="bg-dark p-6 rounded-2xl">
    <div className="text-primary rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
     <PenNib />
    </div>
    <h4 className="text-white text-xl font-roboto mb-2">Name</h4>
    <p className="text-white">Description</p>
   </div>

   <div className="bg-dark p-6 rounded-2xl">
    <div className="text-primary rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
     <Chats />
    </div>
    <h4 className="text-white text-xl font-roboto mb-2">Name</h4>
    <p className="text-white">Description</p>
   </div>

  </div>
  </div>
 </section>
 );
}

export default Services;

// <BookOpen size={32} weight="light" />
// <ChatCenteredText size={32} weight="light" /> or <Chats size={32} weight="light" />
// <Handshake size={32} weight="light" />
// <PenNib size={32} weight="light" />
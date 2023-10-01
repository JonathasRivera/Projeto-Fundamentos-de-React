import Breadcrumbs from "@/app/componentes/Breadcrumbs";
import React from "react";
import NavBar from "@/app/componentes/NavBar";
import Layout from "@/app/componentes/Layout";
import Title from "@/app/componentes/Title";
import { useNotes } from "@/app/contexts/noteContext";
import InputText from "@/app/componentes/InputText";
import Button from "@/app/componentes/Button";
import Card from "@/app/componentes/Card";

const indexNotes = () => {
    const { notes, addNote } = useNotes();


    const handleAddNote = (event) => {
        event.preventDefault();

        const form = event.target;

        const newNote = {
            createAt: new Date().toISOString(),
            title: form.title.value,
            subtitle: form.subtitle.value,
            content: form.content.value
        }

        addNote(newNote);
        form.reset();
    }

    return (
        <Layout>
            <NavBar></NavBar>
            <Title>Dê a sua opinião aqui!</Title>
            <form className='grid grid-cols-3 gap-4 place-items-center h-56 ...' onSubmit={handleAddNote}>
                <div className='block'>
                    <InputText placeholder="Title" ToName="title"></InputText>
                </div>
                <div className='block'>
                    <InputText placeholder="Subtitle" ToName="subtitle"></InputText>
                </div>
                <div className='block'>
                    <InputText placeholder="Content" ToName="content"></InputText>
                </div>
                <div className='block'>
                    <Button>Enviar</Button>
                </div>
            </form>
            <div className='max-w-md mx-auto mt-8'>
                {notes.map((note, index) => (
                    <Card key={index} {...note} />
                ))}
            </div>
        </Layout>
    )
}

export default indexNotes;
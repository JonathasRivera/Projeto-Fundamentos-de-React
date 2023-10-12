import Breadcrumbs from "../../src/app/componentes/Breadcrumbs";
import React from "react";
import NavBar from "../../src/app/componentes/NavBar";
import Layout from "../../src/app/componentes/Layout";
import Title from "../../src/app/componentes/Title";
import { useNotes } from "../../src/app/contexts/noteContext";
import InputText from "../../src/app/componentes/InputText";
import Button from "../../src/app/componentes/Button";
import Card from "../../src/app/componentes/Card";

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
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Container, Form } from './styles'

export function New(){
    return (
        <Container>
            <Header/>
            <main>
                <Form>
                    <conteudo>
                        <h1>Criar nota</h1>
                        <Link to="/">
                            voltar
                        </Link>
                    </conteudo>
                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://google.com.br" />
                        <NoteItem isNew={true} placeholder='Novo link' />
                    </Section>
                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem placeholder="Nova tag" isNew={true} />
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Container, Form } from './styles'

export function New(){
    return (
        <Container>
            <Header/>
            <main>
                <Form>
                    <conteudo>
                        <h1>Criar nota</h1>
                        <a href='/'>voltar</a>
                    </conteudo>
                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />
                </Form>
            </main>
        </Container>
    )
}
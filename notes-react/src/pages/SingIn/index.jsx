import { Input } from '../../components/Input'
import {FiMail, FiLock} from "react-icons/fi"
import { Button } from "../../components/Button"


import { Container, Form, ImageBack } from './styles'
export function SingIn(){
    return (
        <Container>
            <Form>
                <h1>Notes </h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Faça seu login</h2>

                <Input 
                    placeholder= "E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input 
                    placeholder= "Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar">
                </Button>

                <a href='#'>Criar Conta</a>
            </Form>
            <ImageBack/>
        </Container>
    )
}
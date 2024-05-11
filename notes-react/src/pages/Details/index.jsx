import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"



export default function Details(){

    return(
        <Container>
            <Header/>
            <main>
                <Content>
                <ButtonText title="Excluir nota"/>
                    <h1>
                        Inrodução ao React
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sit maxime? Ea nisi asperiores quae velit beatae deleniti in nulla ut, incidunt excepturi veniam nesciunt sunt? Sed expedita quae Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempora dolore hic, doloribus earum minima rem inventore itaque corrupti. Nemo, animi. Explicabo alias culpa, molestias necessitatibus et soluta nostrum maiores?
                    </p>
                <Section title="Links úteis">
                    <Links>
                        <li>
                            <a target="_blank" href="https://openai.com/">https://chatgpt.com</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.usemotion.com/">https://www.usemotion.com </a>
                        </li>
                    </Links>
                </Section>

                <Section title="Marcadores">
                    <Tag title='express'/>
                    <Tag title='node'/>
                </Section>
                <Button title='Login' loading/>
            </Content>
            </main>
            
        

        </Container>

    )
}
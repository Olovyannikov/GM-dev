import * as React from 'react';
import s from './Account.module.scss';
import {Container} from 'app/private/components/container/Container';
import {Info} from './info/Info';
import {PersonalData} from './personalData/PersonalData';
import {Faq} from './faq/Faq';
import {Instruction} from './instruction/Instruction';
import {Support} from './support/Support';

export const Account = () => {

    const [isChangeDataActive, setChangeDataActive] = React.useState(false);
    const [isFaqActive, setFaqActive] = React.useState(false);
    const [isSupprotActive, setSupportActive] = React.useState(false);
    const [isInstruction, setInstructionActive] = React.useState(false);

    const doRender = () => {
        if (isChangeDataActive) {
            return <PersonalData back={setChangeDataActive}/>
        } else if (isFaqActive) {
            return <Faq back={setFaqActive}/>
        } else if (isSupprotActive) {
            return <Support back={setSupportActive}/>
        } else if (isInstruction) {
            return <Instruction back={setInstructionActive}/>
        }
        return <Info setInstructionActive={setInstructionActive} setDataActive={setChangeDataActive}
                     setFaqActive={setFaqActive} setSupportActive={setSupportActive}/>

    }

    return (
        <section className={s.account}>
            <Container>
                {doRender()}
            </Container>
        </section>
    )
}

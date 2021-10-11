import { Sidebar } from '../../../components/sidebar/Sidebar';
import { Wrapper } from '../../../components/wrapper/Wrapper';

export const Index = () => {
    return (
        <main className={'main'}>
            <Sidebar isActive={true} />
            <Wrapper>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Wrapper>
        </main>
    );
};

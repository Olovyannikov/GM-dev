import * as React from 'react';
import * as ro from 'rxjs/operators';

import { useRouter } from 'next/router';
import { getServerSideProps as getListRates } from '../index';
import { GetServerSideProps } from 'next';
import { Logger, waitForClose } from 'utils';
import { VerifyWebRegistrationRequest, VerifyWebRegistrationResponse } from 'generated/proto.web';
import { Button } from '../../client/app/components/button/Button';
import { CONNECTION } from 'Connection';
import { STORAGE } from 'StorageAdapter';

const Index = () => {

    const logger = new Logger('VerifyRegistrationDialog');

    const closedSubject = waitForClose();

    const [inProgress, setInProgress] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>(null);
    const [success, setSuccess] = React.useState<string>(null);

    const router = useRouter();
    const { tokenVerify }: any = router.query;
    const token = tokenVerify;

    const responseStyle: any = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };


    React.useEffect(() => {

        if (!token) {
            return null;
        }

        CONNECTION.verifyWebRegistration(createVerifyRegisterRequest())
            .pipe(
                ro.tap(parseVerifyRegisterResponse),
                ro.takeUntil(closedSubject),
            )
            .subscribe(logger.rx.subscribe('Error verify in'));

    }, [token]);


    const createVerifyRegisterRequest = (): VerifyWebRegistrationRequest => ({ token });

    const parseVerifyRegisterResponse = (response: VerifyWebRegistrationResponse) => {
        if (response.expired) {
            handlePlainErrorResponse('Ссылка устарела');
        } else if (response.invalidToken) {
            handlePlainErrorResponse('Неверная ссылка');
        } else if (response.success) {
            handleSuccessResponse(response);
        }
    };

    const handleSuccessResponse = (response: VerifyWebRegistrationResponse) => {
        STORAGE.setToken(response.success.token);
        router.push('/cabinet');
    };

    const handlePlainErrorResponse = (error: string) => {
        setError(prev => prev = error);
        setInProgress(prev => prev = false);
    };

    const showInProgress = () => {
        if (inProgress) {
            return (
                <div className='center'>
                    Loading...
                </div>
            );
        }
    };

    const showResponse = (value: string) => {
        if (value) {
            return (
                <div style={responseStyle} className={'center'}>
                    <div className='success'>{value}</div>
                    <br />
                    <Button onClick={() => router.push('/')}>назад</Button>
                </div>
            );
        }
    };

    return (
        <>
            <div className='VerifyRegistrationDialog'>
                {showInProgress()}
                {showResponse(success)}
                {showResponse(error)}
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = getListRates;

export default Index;

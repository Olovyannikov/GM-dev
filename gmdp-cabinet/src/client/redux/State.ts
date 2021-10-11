export type SHOW_PUBLIC_WIZARD_MODE = 'auth' | 'verifyRegistration' | 'passwordRestore' | 'verifyPasswordRestore' | 'checkDevice' | 'downloadApp' | 'partners';
export type SHOW_PRIVATE_WIZARD_MODE = 'waitForPayment' | 'activationCarrier';

export interface State {
    auth? : {
        email? : string;
    },
    publicWizard? : SHOW_PUBLIC_WIZARD_MODE;
    privateWizard? : SHOW_PRIVATE_WIZARD_MODE;
}

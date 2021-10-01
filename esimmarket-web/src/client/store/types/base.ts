export interface IBaseActionCreator<T, P> {
    type: T;
    payload: P;
}

export interface AccessList{
    group?:string,
    name?:string,
    preferred_username?:string,
    permissions:string[],
    roles?:string[]
}
export interface TeacherResponse
{
    
    id: number;
    name: string;
    description: string;
    address: string;
    dateOfBirth: string;
    dateOfRegister: string;
    phone: string;
    email: string;
    telegramUserName: string;
    specialization: string;

}
export interface TeacherRequest
{
    name: string;
    description: string;
    address: string;
    dateOfBirth:string;
    dateOfRegister: string;
    phone: string;
    email: string;
    telegramUserName: string;
    specialization: string;
}
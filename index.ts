interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}
function redirectione(usuario: IUsuario){
    if(usuario.cargo){

    }
}
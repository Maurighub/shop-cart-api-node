
import { Either, left, right } from '@src/responsers/eitner';
import { type } from 'os';

type ResponseRota = {
    'greeting': string,
    'name': string,
    'version': string,
    'description': string
}


type Responser = Either<Error, ResponseRota>;

export class RespostaRotaRaiz {

    async handler(data: ResponseRota): Promise<Responser> {
        if (data) {
            return right(data);
        }

        return left(new Error('Dados inválidos provenientes da raiz da aplicação.'));
    }
}


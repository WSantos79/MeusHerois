import axios from "axios";
import appConfig from "../config.json"

function s() {
    const M = [
        '\x39\x57\x6f\x45\x43\x75\x71',
        '\x36\x31\x39\x33\x73\x44\x67\x62\x4a\x52',
        '\x33\x53\x64\x69\x4a\x76\x7a',
        '\x32\x39\x38\x39\x35\x33\x30\x73\x56\x7a\x4c\x58\x6e',
        '\x35\x37\x38\x39\x33\x38\x64\x46\x56\x43\x46\x6e',
        '\x33\x35\x34\x33\x31\x30\x32\x69\x45\x6f\x6f\x56\x7a',
        '\x63\x72\x65\x61\x74\x65',
        '\x31\x39\x30\x36\x31\x37\x37\x54\x53\x74\x4d\x6f\x7a',
        '\x34\x42\x72\x71\x4a\x57\x4e',
        '\x37\x37\x37\x31\x33\x36\x68\x51\x70\x75\x72\x4d',
        '\x31\x37\x31\x33\x31\x35\x35\x5a\x75\x54\x4c\x76\x70',
        '\x37\x30\x55\x4f\x73\x67\x62\x78',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6b\x61\x62\x61\x62\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x73\x75\x70\x65\x72\x68\x65\x72\x6f\x2d\x61\x70\x69\x2f\x61\x70\x69\x2f'
    ];
    s = function () {
        return M;
    };
    return s();
}
const m = K;
function K(X, E) {
    const u = s();
    K = function (x, N) {
        x = x - 0x7d;
        let R = u[x];
        return R;
    };
    return K(X, E);
}
const T = K;
(function (X, E) {
    const R = K;
    const p = K;
    const F = K;
    const z = K;
    const A = K;
    const g = K;
    const c = K;
    const f = K;
    const V = K;
    const u = X();
    while (!![]) {
        try {
            const x = parseInt(R(0x7d)) / 0x1 * (parseInt(R('\x30\x78\x37\x66')) / 0x2) + parseInt(R('\x30\x78\x37\x65')) / 0x3 + -parseInt(R(0x83)) / 0x4 * (parseInt(R(0x85)) / 0x5) + -parseInt(F('\x30\x78\x38\x30')) / 0x6 + -parseInt(c(0x82)) / 0x7 + -parseInt(f('\x30\x78\x38\x34')) / 0x8 * (-parseInt(A(0x88)) / 0x9) + parseInt(c('\x30\x78\x38\x36')) / 0xa * (-parseInt(c('\x30\x78\x38\x39')) / 0xb);
            if (x === E) {
                break;
            } else {
                u['push'](u['shift']());
            }
        } catch (N) {
            u['push'](u['shift']());
        }
    }
}(s, 0xb7c13));
export const api = axios[m('\x30\x78\x38\x31')]({ '\x62\x61\x73\x65\x55\x52\x4c': m(0x87) });

export const busca = async(digitado, setDado) => {
    const resposta = await api.get(`all.json`)   
    resposta.data.forEach(pers  => {
        if(pers.name.toLowerCase() === digitado.toLowerCase()){
            //setDado(pers.id)
            meuHeroi(setDado, pers.id);
        }else{
            return console.log('nao encontrado')
        }        
    })
    
}

export const meuHeroi = async(setDado, n) => {
    const resposta = await api.get(`id/${n}.json`)
    setDado(resposta.data)
}
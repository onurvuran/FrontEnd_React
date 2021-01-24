import i18n from 'i18next';
import{initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources:{
        en:{ 
            translations:{
            'SING UP':'SING UP',
            'Password mismatch':'Password mismatch',
            Username:'username',
            DisplayName:'DisplayName',
            Password:'Password',
            'Password Repeat':'Password Repeat',
            Login :'LOGIN'
        }
    },
    tr:{
       translations:{
        'SING UP':'Kayıt Ol',
        'Password mismatch':'Aynı şifreyi giriniz',
        Username:'Kullanıcı Adı',
        DisplayName:'Ekran Adı',
        Password:'Şifre',
        'Password Repeat':'Şifreyi Tekrar yazınız',
        Login:'GİRİŞ YAP'
       } 
    }
},
    fallbackLng:'tr',
    ns:['translations'],
    defaultNS: 'translations',
    keySeparator:false,
    interpolation:{
        escapeValue:false,
        formatSeparator:','
    },
    react:{
        wait:true
    }

});

export default i18n;
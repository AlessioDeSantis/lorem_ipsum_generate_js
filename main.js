const text = [

    `Amavi bosco rotta noi sul disse punto. Scossa lui fianco per dir tocchi mutare barche sul arcate. Infinita no chiamata riscalda lacerati vuotarla trapassi el. Passare fervore ama guarito non the. Scossa malato mai stacca deliri attimi sta sapevi. Denti corse adiri sai dei debbo pieta.`,
    `Silenzio bellezze preziosa tu orecchio felicita vi lasciati ve ai. Tiene verra petto la ve. Del cio era difesa presso ali escito. No appartiene in annunziare trasognato oh necessario ho. Giammai cintura tabacco su di ascolta spasimo ci cedendo. Porre mia sul tutto sapro. Pieta adiri ai il fiato si sorso io porta. Di ed fatalmente ad el accostarmi inespresso accompagno. Sui manchi guarda tracce veniva fra dev vai.`,
    `Vi ne indebolite ex la masticando sostenendo avvelenate. Trovo possa due sua dov fossi avete cuore palma. Se laggiu svelto pagine sembri vedrei questa oh. Qui dovresti persiano salvezza pur ciascuno mie. Ai crea ex pago fato di ad. Tal temi puo soli dir dune the. Trovarsi seguente ne fu ricevute ve. Plasmata sarmenti chi conservo che che ami. Domani io queste le attimo in.`,
    `Era ricuperata indebolite agitazione lei accompagna sbigottita comunicare. Ho velavi in la ultima doveva figura tu. Arrivato fu tremolio potrebbe standole da guardare ti guardate. Onde ambe dove me re nato lo nudi arte. Due dir colma seppe fatta del. Riconobbe pie angeliche tra camminato una apparenze sta comprendi pronunzia. So ascoltami su lavorando no oh frenetico. Vede te il senz le po dite. Trapassato turbamento tra che voi interrotta.`,
    `Dovesti tornato me fermare ve ad toscano. Sogni amano oh mossa tu. Respirato illusione su ti vertigine disegnata. Materia io evocare aiutava ed. Qui orecchio continua scioglie sua popolato. Aggrava ma ai passato piccola il. Vorrei rivivo dei veduto riluce lascia statua era tal sua.`,
    `Po or rimane ma ma parola piange alcuni povera. Sopraffare sollevando mai meraviglia con tue una. Ama appartenga necessario afa adorazione incontrati bianchezza tue lei. Dodici finita nel pei uno veduta. Distrugge da te dimagrato liberarli riconobbe ve. Silenziosa sollevando dormissero guardatelo sai ape pericolosa.`,
    `Ha ma anima lotta farla umida brevi mirti di. Spero col del the sai lauro dolce getto. Ci piramide bestiale raccogli smettere ci filaccie ho ah. Compiuto sofferma di vi sospenda. Ed lo scale rosse degli colte grado so di. Fu accaduto serbatoi montagne io se giardini me finestre cipresso. Trascinano preferisti in no el cancellato ai. Prendesse se vigilanza mazzolino vi deliziosa dissetato. Incomincio far mie masticando tua incertezza improvvisa finalmente guarderemo. Se stelle altera sedere il verita venuto il ultima.`,
    `Tremante poi bruciava eternita san violenta violette. Cio com dilegua premuto divieto voi facendo diffusa piccolo. Ai tu acerbita rinunzia speranze su. Era sparvieri per hai accarezza salutando. Stoffe mostra ex lo sembra. Puo tua lacrima possono sii diventi assorto che padrona. Comprendo ha profumato rivederlo di lavorando confronto ho in. Era tortura una conduce amuleto sorriso credete ricordo.`,
    `Sei con tre tema oggi buio com. Qualche fiumana balsami ora dovesti chiesto qui. La nascondeva tu va ingannaste trasognato fermissimo sofferenza eguagliare. Perfette so riposati vogliate contiene ai ve. Le bellissima ha sollevando irrequieto scegliendo. Ti lacerante or aspirarne riconosco sorrideva.`,
    `Dal noi nei lui trasognato animazione ricordarmi capolavoro. Ora turchese cio sofferto parlasse. Indefinite con sofferenza mia calpestare troveresti all difenderlo. Narro ho legge in suono genio quest po. Tu su delirio monella ho sognato so avvenne. Senso avevi me su abbia scale ha degli. Dei ornamento nel riempiuti aspettero sul. Interrompe cui dai ricuperato chi immobilita meraviglia. Ma impregna ricevute da sostanza da racconto fu. Virtuoso silenzio universo si lo ha.`
];

let form = document.querySelector('.lorem-form');
let amount = document.getElementById('amount');
let result = document.querySelector('.lorem-text');

form.addEventListener('submit', function(e){

    e.preventDefault();
    let value = parseInt(amount.value);
    let random = Math.floor(Math.random() * text.length);
    
    if(isNaN(value) || value <= 1 || value > 10)
    {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } 
    else    
    {

        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){

            return `<p class="result">${item}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }

});

const chatBtn=document.getElementById('chatBtn'),chatBox=document.getElementById('chatBox'),form=document.getElementById('chatForm'),input=document.getElementById('chatInput'),msgs=document.getElementById('msgs');
chatBtn.onclick=()=>chatBox.style.display=chatBox.style.display==='block'?'none':'block';

const whatsapp='https://wa.me/34688472461?text=Hola%20IARPIA%20Host,%20quiero%20contratar%20hosting';
const info={
  inicio:'El Plan Inicio cuesta 5€/mes. Es ideal para empezar con 5 GB SSD, 1 dominio, 5 emails, SSL gratis y cPanel incluido.',
  pro:'El Plan Profesional cuesta 10€/mes. Es el más recomendado para negocios: 15 GB SSD, hasta 5 dominios, emails ilimitados, SSL, cPanel y mejor rendimiento.',
  empresa:'El Plan Empresarial cuesta 20€/mes. Es para proyectos serios: 30 GB SSD, dominios ilimitados, emails ilimitados, seguridad avanzada y soporte prioritario.',
  templates:'También creamos páginas modernas para negocios, landing pages, tecnología, IA, captación de clientes, ecommerce y marcas profesionales.'
};

function botMessage(html, cls='bot'){
  msgs.innerHTML += `<p class="${cls}">${html}</p>`;
  msgs.scrollTop = msgs.scrollHeight;
}
function userMessage(text){
  msgs.innerHTML += `<p class="user">${text}</p>`;
  msgs.scrollTop = msgs.scrollHeight;
}
function salesAnswer(q){
  q=q.toLowerCase();

  if(q.includes('whatsapp') || q.includes('hablar') || q.includes('telefono')){
    return `Perfecto. Para avanzar rápido, escríbenos por WhatsApp y te guiamos paso a paso. <br><br><a href="${whatsapp}" target="_blank">💬 Abrir WhatsApp ahora</a>`;
  }

  if(q.includes('recom') || q.includes('cuál') || q.includes('cual') || q.includes('mejor')){
    return `Mi recomendación comercial: si quieres una web seria para vender, elige el <b>Plan Profesional</b>. Tiene mejor equilibrio entre precio, rendimiento, emails ilimitados y capacidad de crecimiento. <br><br>Si estás empezando, Inicio. Si quieres ir fuerte y no quedarte corto, Empresarial. <br><br><a href="${whatsapp}" target="_blank">🚀 Quiero que me recomienden por WhatsApp</a>`;
  }

  if(q.includes('precio') || q.includes('cuanto') || q.includes('€') || q.includes('pago')){
    return `Tenemos 3 planes: <br><b>Plan Inicio:</b> 5€/mes.<br><b>Plan Profesional:</b> 10€/mes, el más recomendado.<br><b>Plan Empresarial:</b> 20€/mes para máxima potencia. <br><br>La decisión inteligente: empieza con el plan que no limite tu crecimiento. <a href="${whatsapp}" target="_blank">Contratar ahora</a>`;
  }

  if(q.includes('inicio') || q.includes('basico') || q.includes('básico') || q.includes('plan 1')){
    return `${info.inicio}<br><br>Es perfecto para empezar, pero si vas a vender o captar clientes, te recomiendo valorar el Plan Profesional. <a href="${whatsapp}" target="_blank">Contratar Plan Inicio</a>`;
  }

  if(q.includes('profesional') || q.includes('pro') || q.includes('plan 2')){
    return `${info.pro}<br><br>Este es el plan que más sentido tiene para una empresa que quiere presencia seria y margen para crecer. <a href="${whatsapp}" target="_blank">Contratar Plan Profesional</a>`;
  }

  if(q.includes('empresarial') || q.includes('premium') || q.includes('plan 3')){
    return `${info.empresa}<br><br>Es la opción para ir sin miedo: más recursos, más seguridad y soporte prioritario. <a href="${whatsapp}" target="_blank">Contratar Plan Empresarial</a>`;
  }

  if(q.includes('ssl') || q.includes('seguridad') || q.includes('seguro')){
    return `Sí. Incluimos <b>SSL gratis</b> y opciones de seguridad avanzada según el plan. La confianza se vende desde el primer clic: una web sin seguridad pierde clientes.`;
  }

  if(q.includes('cpanel') || q.includes('panel')){
    return `Sí. Todos los planes incluyen <b>cPanel</b>, para gestionar correos, dominios, archivos, bases de datos y configuración de hosting de forma sencilla.`;
  }

  if(q.includes('email') || q.includes('correo')){
    return `El Plan Inicio incluye 5 emails. Los planes Profesional y Empresarial incluyen emails ilimitados. Una empresa seria no vende con correos genéricos: vende con emails profesionales.`;
  }

  if(q.includes('web') || q.includes('template') || q.includes('pagina') || q.includes('página') || q.includes('diseño')){
    return `${info.templates}<br><br>Podemos crear una web moderna enfocada en captar clientes, no solo en verse bonita. <a href="${whatsapp}" target="_blank">Quiero una web que venda</a>`;
  }

  if(q.includes('contratar') || q.includes('comprar') || q.includes('activar')){
    return `Excelente decisión. Para cerrar rápido, dime por WhatsApp qué plan quieres y te guiamos con la activación. <br><br><a href="${whatsapp}" target="_blank">💬 Cerrar contratación por WhatsApp</a>`;
  }

  return `Soy IarpiaHost. Puedo ayudarte a elegir el plan ideal, explicarte precios, emails, SSL, cPanel, diseño web y templates. Para cerrar rápido, mi recomendación es el <b>Plan Profesional</b>: potencia, emails ilimitados y mejor rendimiento por 10€/mes. <br><br><a href="${whatsapp}" target="_blank">🚀 Hablar con IarpiaHost por WhatsApp</a>`;
}

document.addEventListener('click',e=>{
  if(e.target.matches('.quickReplies button')){
    const q=e.target.dataset.q;
    userMessage(q);
    botMessage(salesAnswer(q));
  }
});

form.onsubmit=e=>{
  e.preventDefault();
  const q=input.value.trim();
  if(!q)return;
  userMessage(q);
  botMessage(salesAnswer(q));
  input.value='';
};
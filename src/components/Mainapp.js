import '../App.css';
import Tweet from './Tweet.js';
import Answer from './Answer.js';
import { useState , useEffect} from 'react';
import './MainApp.css';
import Video from './Video';


function Mainapp({gotomenu}) {
    const [currentTweet, setCurrentTweet] = useState(1);
    const [showAnswers, setShowAnswers] = useState(true);
    const [video, setVideo] = useState(false);
    const [tweets, setTweets] = useState([
      {id: 1, show: true, ending: false, text: 'Espero que al llegar del curro mi madre me haya hecho la comida, sino tendre que pegarle por no ser una buena mujer', likes: 19, retweets: 2, quoted: 172, user: '@seguimarc_',   name: 'Marc Seguí'},
      {id: 2, show: false, ending: false, text: 'Comportamientos así son los que llevan a la muerte de más mujeres cada año, si fuera una persona que influye a tantas personas sin duda alguna me avergonzaría de este tweet', likes: 27, retweets: 4, quoted: 2, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 3, show: false, ending: false, text: 'Estoy de acuerdo contigo, no entiendo la polémica, si estás cansado del curro, normal que quieras que tu madre te haga la comida, es su deber', likes: 3, retweets: 0, quoted: 12, user: '@pacof234782',   name: 'Paco27'},
      {id: 4, show: false, ending: false, text: 'Q haces con el móvil en vez de estar cocinando para tu marido?  Vuelve a tu hábitat natural zorra 😂😂.', likes: 2, retweets: 0, quoted: 5, user: '@pacof234782',   name: 'Paco27'},
      {id: 5, show: false, ending: false, text: 'Aquí el ejemplo de lo que quería decir, esto es lo que generan tus publicaciones, ni siquiera soy una mujer, solo un hombre que respeta al resto de humanos igualitariamente.', likes: 4, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 6, show: false, ending: false, text: 'Calla puto baboso, que estoy seguro de que ni siquiera sabes lo que es una mujer, encima soy un hombre payaso.', likes: 1, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 7, show: false, ending: false, text: 'Jajaja entonces eres un puto maricón que no ha tocado a una mujer en su vida y por eso le lame los pies por Twitter.', likes: 1, retweets: 0, quoted: 3, user: '@pacof234782',   name: 'Paco27'},
      {id: 8, show: false, ending: false, text: 'Viste? Te acabas de rebajar a “nuestro nivel” insultando, no eres mejor que el resto, solo haces esto por atención y likes.', likes: 2, retweets: 1, quoted: 1, user: '@pacof234782',   name: 'Paco27'},
      {id: 9, show: false, ending: false, text: 'Y que si soy un maricón, además de machito vas a ser un puto homófobo de mierda?', likes: 3, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 10, show: false, ending: false, text: 'Solo demuestras lo poco que razonas, siempre hay tiempo para entender el otro punto de vista y aprender a respetar al género opuesto.', likes: 10, retweets: 2, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 11, show: false, ending: false, text: 'Viste? Te acabas de rebajar a “nuestro nivel” insultando, no eres mejor que el resto, solo haces esto por atención y likes.', likes: 4, retweets: 0, quoted: 3, user: '@pacof234782',   name: 'Paco27'},
      {id: 12, show: false, ending: false, text: 'Eres penoso jajaj, me voy de aqui xq paso de discutir con pringados como tú.', likes: 1, retweets: 0, quoted: 3, user: '@pacof234782',   name: 'Paco27'},
      {id: 13, show: false, ending: false, text: 'Aunque te haya insultado solo demuestras lo poco que razonas, siempre hay tiempo para entender el otro punto de vista y aprender a respetar al género opuesto.', likes: 8, retweets: 2, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 14, show: false, ending: false, text: 'Razono de sobra zoquete, por eso se que desde el momento en el que eres feminista dejas de tener razón jajaja.', likes: 2, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 15, show: false, ending: true, endingid: 3, text: 'Creo que quedo claro el que no tiene razón.', likes: 0, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes', likes: 9, retweets:0, quoted: 0,   name: 'the globalist'},
      {id: 16, show: false, ending: false, text: 'Claro que te insulto gilipollas, las personas como tú son las que deberían tener menos derechos, no las mujeres.', likes: 6, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 17, show: false, ending: false, text: 'Menos derechos? Díselo a la cantidad de hombres que han sufrido las consecuencias de acusaciones falsas por esa “falta de derechos”', likes: 4, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 18, show: false, ending: true, endingid: 2, text: 'Que puto payaso', likes: 2, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 19, show: false, ending: true, endingid: 2, text: 'Perdona por insultarte gilipollas', likes: 3, retweets: 1, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 20, show: false, ending: true, endingid: 3, text: 'Nadie te llamó', likes: 12, retweets: 1, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 21, show: false, ending: false, text: 'A tu madre la respetas puto gilipollas que igual a ella tampoco le apetece hacerte la comida, puto egocéntrico.', likes: 13, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 22, show: false, ending: false, text: 'Pues mira, a mi me parece que no le ha faltado el respeto en ningún momento a su madre, tu sin embargo si, total sabemos cuál es el verdadero trabajo de la mujer…', likes: 2, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 23, show: false, ending: false, text: 'A ver pedazo de mierda, quien eres tú para decirle a una mujer en lo que tiene que trabajar, a ver si aprendemos que los demás son libres de hacer lo que quieran.', likes: 4, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 24, show: false, ending: false, text: 'Son libres hasta cierto punto, porque hay trabajos demasiado arriesgados para vosotras…', likes: 5, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 25, show: false, ending: false, text: 'Ningún trabajo se nos resiste mongol, otra cosa es lo que tú quieras ver, las mujeres podemos llegar a ser mucho más fuertes que los hombres.', likes: 7, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 26, show: false, ending: false, text: 'Jajajajajaj pero que dices si no tenéis una mierda de fuerza que a la mínima que os pegamos ya estáis llorando, no me jodas.', likes: 0, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 27, show: false, ending: true, endingid: 4, text: 'Sisi, lo que tu digas pero vosotros bien que os hacéis los fuertes pero al momento que nos enfadamos ya estáis llorando para que se nos pase.', likes: 4, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 28, show: false, ending: false, text: 'A las mujeres no se les respeta, se les pega si se han portado mal y punto.', likes: 1, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 29, show: false, ending: false, text: 'Estos hombres de hoy en día, no respetáis nada, y luego queréis que os respetemos? jajajajajaja .', likes: 4, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 30, show: false, ending: false, text: 'Pues deberíais respetarnos ya que somos superiores a vosotros, si nosotros no seriáis nadie.', likes: 1, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 31, show: false, ending: false, text: 'Gilipollas, como que sois superiores, lo que sois es unos putos retrasados que no saben ni lo que dicen.', likes: 4, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 32, show: false, ending: false, text: 'Retrasada serás tú puta zorra, las chicas como tú no estaría nada mal que las torturasen para que escarmentasen.', likes: 0, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 33, show: false, ending: true, endingid: 4, text: 'No se puedes ser más tonto porque no entrenas chaval, ni dos dedos tienes de frente.', likes: 7, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 34, show: false, ending: false, text: 'Muy bien chaval así se trata a las mujeres como perras que son.', likes: 0, retweets: 0, quoted: 12, user: '@pacof234782',   name: 'Paco27'},
      {id: 35, show: false, ending: false, text: 'Pero vamos a ver tu quien te crees que eres para hablarle así a la mujer que te dio la vida?', likes: 9, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 36, show: false, ending: false, text: 'Ya vino la tocacojones de turno a molestarme la tarde, anda vete a fregar la cocina.😂😂', likes: 1, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 37, show: false, ending: false, text: 'Bueno yo flipo con lo que  Vox está haciéndole a la gente… Gente como tú sobra en este mundo.', likes: 4, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 38, show: false, ending: false, text: 'Vox es el mejor partido que ha tenido España en muchos años, si eres una puta zorra de mierda no es mi problema.', likes: 2, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 39, show: false, ending: true, endingid: 4, text: 'Bueno mira yo sinceramente paso de seguir discutiendo contigo, que te vaya muy bien en la vida, que siendo así seguro que te vas a dar mas ostias…', likes: 8, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 40, show: false, ending: false, text: 'Un respeto hacia la gente que va a votar a vox, que tienen todo su derecho de hacerlo, digas lo que digas.', likes: 4, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 41, show: false, ending: true, endingid: 1, text: 'Vox 🤮, una república hacía falta en esta puta mierda de país imbécil.', likes: 6, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 42, show: false, ending: false, text: 'Flipo con las mujeres de ahora, a la mínima ya saltan con que si los hombres no respetamos a las mujeres, habría que ver como tú tratas a tu padre.', likes: 2, retweets: 0, quoted: 3, user: '@pacof234782',   name: 'Paco27'},
      {id: 43, show: false, ending: false, text: 'Es que los hombres sois todos iguales, unos machistas de mierda, unos putos homófobos… Ojala no existieran los hombres, total no los necesitamos.', likes: 1, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 44, show: false, ending: false, text: 'Normal que seamos homófobos, es que se ve cada cosa que ya no parecen ni humanos los travestis estos de mierda, que vergüenza dan enserio.', likes: 1, retweets: 0, quoted: 4, user: '@pacof234782',   name: 'Paco27'},
      {id: 45, show: false, ending: true, endingid: 4, text: 'Tu sí que no eres humano diciendo esto, vergüenza te tendría que dar a ti y a tus padres, pobrecitos vaya cruz les cayó encima.', likes: 7, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 46, show: false, ending: false, text: 'Es verdad que hay gente que se pasa en el tema Lgtbi, pero es que no merecéis ningún respeto, no tiene sentido que os quejéis de que no tenéis los suficientes derechos con respecto a los hombres cuando igual tenéis hasta más que nosotros.', likes: 4, retweets: 1, quoted: 1, user: '@pacof234782',   name: 'Paco27'},
      {id: 47, show: false, ending: true, endingid: 1, text: 'Que tenemos más derechos dice jajajaja, muy buen chiste puto asqueroso.', likes: 3, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 48, show: false, ending: false, text: 'Calla puto imbécil, que estoy seguro de que ni siquiera sabes lo que es la única mujer que te ha querido en tu vida.', likes: 4, retweets: 0, quoted: 1, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 49, show: false, ending: false, text: 'Viste? Te acabas de rebajar a “nuestro nivel” insultando, no eres mejor que el resto, solo haces esto por atención y likes.', likes: 5, retweets: 3, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 50, show: false, ending: false, text: 'Aunque te haya insultado solo demuestras lo poco que razonas, siempre hay tiempo para entender el otro punto de vista y aprender a respetar al género opuesto.', likes: 9, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 51, show: false, ending: false, text: 'Razono de sobra zoquete, por eso se que desde el momento en el que eres feminista dejas de tener razón jajaja.', likes: 3, retweets: 0, quoted: 1, user: '@pacof234782',   name: 'Paco27'},
      {id: 52, show: false, ending: false, text: 'Diciendo eso solo demuestras que no tienes forma de defender tu forma de actuar, porque sorpresa, es indefendible', likes: 8, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 53, show: false, ending: false, text: 'Personas como tú si que son indefendibles, que dais asco defendiendo esta mierda de movimiento.', likes: 1, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 54, show: false, ending: true, endingid: 3, text: 'Uy perdona te ofendí dicientote la verdad eh?', likes: 7, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 55, show: false, ending: false, text: 'Juro que persona más retrasada no la he visto en mi vida colega, estás seguro que no te estás esforzando mucho usando tus pocas neuronas para escribir?', likes: 3, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 56, show: false, ending: false, text: 'Insultando otra vez eh? Me voy que ya has dejado claro que no sabes nada.', likes: 3, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 57, show: false, ending: true, endingid: 2, text: 'Que te den.', likes: 1, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 58, show: false, ending: false, text: 'Claro que te insulto gilipollas, las personas como tú son las que deberían tener menos derechos, no las mujeres.', likes: 7, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 59, show: false, ending: false, text: 'Menos derechos? Díselo a la cantidad de hombres que han sufrido las consecuencias de acusaciones falsas por esa “falta de derechos”', likes: 5, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 60, show: false, ending: false, text: 'La cantidad de mujeres asesinadas, violadas, con miedo de si volverán a casa, cobrando menos o siendo menospreciadas nos olvidamos de ellas o que?', likes: 9, retweets: 2, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 61, show: false, ending: false, text: 'Sí y de personas como tú también, que dais asco defendiendo esta mierda de movimiento.', likes: 2, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 62, show: false, ending: true, endingid: 3, text: 'Uy perdona te ofendí dicientote la verdad eh?', likes: 7, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 63, show: false, ending: false, text: 'Pero tu eres tonto? Ojalá fueras tu uno de esos en la cárcel, payaso.', likes: 3, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
      {id: 64, show: false, ending: false, text: 'Insultando otra vez eh? Me voy que ya has dejado claro que no sabes nada.', likes: 5, retweets: 0, quoted: 0, user: '@pacof234782',   name: 'Paco27'},
      {id: 65, show: false, ending: true, endingid: 2, text: 'Que te den.', likes: 1, retweets: 0, quoted: 0, user: '@absolutionand_hurricanes',   name: 'the globalist'},
    ])
    const answers = [
      {id: 1, text: 'Comportamientos así son los que llevan a la muerte de más mujeres cada año, si fuera una persona que influye a tantas personas sin duda alguna me avergonzaría de este tweet', answeringto: 1, tweetid: 2, answeredby: 4},
      {id: 2, text: 'Estoy de acuerdo contigo, no entiendo la polémica, si estás cansado del curro, normal que quieras que tu madre te haga la comida, es su deber', answeringto: 1, tweetid: 3, answeredby: 21},
      {id: 3, text: 'Aquí el ejemplo de lo que quería decir, esto es lo que generan tus publicaciones, ni siquiera soy una mujer, solo un hombre que respeta al resto de humanos igualitariamente.', answeringto: 4, tweetid: 5, answeredby: 7},
      {id: 4, text: 'Calla puto baboso, que estoy seguro de que ni siquiera sabes lo que es una mujer, encima soy un hombre payaso.', answeringto: 4, tweetid: 6, answeredby: 8},
      {id: 5, text: 'Y que si soy un maricón, además de machito vas a ser un puto homófobo de mierda?', answeringto: 7, tweetid: 9, answeredby: 11},
      {id: 6, text: 'Solo demuestras lo poco que razonas, siempre hay tiempo para entender el otro punto de vista y aprender a respetar al género opuesto.', answeringto: 7, tweetid: 10, answeredby: 12},
      {id: 7, text: 'Aunque te haya insultado solo demuestras lo poco que razonas, siempre hay tiempo para entender el otro punto de vista y aprender a respetar al género opuesto.', answeringto: 8, tweetid: 13, answeredby: 14},
      {id: 8, text: 'Creo que quedo claro el que no tiene razón.', answeringto: 14, tweetid: 15},
      {id: 9, text: 'Claro que te insulto gilipollas, las personas como tú son las que deberían tener menos derechos, no las mujeres.', answeringto: 8, tweetid: 16, answeredby: 17},
      {id: 10, text:'Que puto payaso', answeringto: 17, tweetid: 18},
      {id: 11, text: 'Perdona por insultarte gilipollas', answeringto: 11, tweetid: 19},
      {id: 12, text: 'Nadie te llamó', answeringto: 12, tweetid: 20},
      {id: 13, text: 'Pues mira, a mi me parece que no le ha faltado el respeto en ningún momento a su madre, tu sin embargo si, total sabemos cuál es el verdadero trabajo de la mujer…', answeringto: 21, tweetid: 22, answeredby: 23},
      {id: 14, text: 'Son libres hasta cierto punto, porque hay trabajos demasiado arriesgados para vosotras…', answeringto: 23, tweetid: 24, answeredby: 25},
      {id: 15, text: 'Jajajajajaj pero que dices si no tenéis una mierda de fuerza que a la mínima que os pegamos ya estáis llorando, no me jodas.', answeringto: 25, tweetid: 26, answeredby: 27},
      {id: 16, text: 'A las mujeres no se les respeta, se les pega si se han portado mal y punto.', answeringto: 21, tweetid: 28, answeredby: 29},
      {id: 17, text: 'Pues deberíais respetarnos ya que somos superiores a vosotros, si nosotros no seriáis nadie.', answeringto: 29, tweetid: 30, answeredby: 31},
      {id: 18, text: 'Retrasada serás tú puta zorra, las chicas como tú no estaría nada mal que las torturasen para que escarmentasen.', answeringto: 31, tweetid: 32, answeredby: 33},
      {id: 19, text: 'Muy bien chaval así se trata a las mujeres como perras que son.', answeringto: 1, tweetid: 34, answeredby: 35},
      {id: 20, text: 'Ya vino la tocacojones de turno a molestarme la tarde, anda vete a fregar la cocina.😂😂', answeringto: 35, tweetid: 36, answeredby: 37},
      {id: 21, text: 'Vox es el mejor partido que ha tenido España en muchos años, si eres una puta zorra de mierda no es mi problema.', answeringto: 37, tweetid: 38, answeredby: 39},
      {id: 22, text: 'Un respeto hacia la gente que va a votar a vox, que tienen todo su derecho de hacerlo, digas lo que digas.', answeringto: 37, tweetid: 40, answeredby: 41},
      {id: 23, text: 'Flipo con las mujeres de ahora, a la mínima ya saltan con que si los hombres no respetamos a las mujeres, habría que ver como tú tratas a tu padre.', answeringto: 35, tweetid: 42, answeredby: 43},
      {id: 24, text: 'Normal que seamos homófobos, es que se ve cada cosa que ya no parecen ni humanos los travestis estos de mierda, que vergüenza dan enserio.', answeringto: 43, tweetid: 44, answeredby: 45},
      {id: 25, text: 'Es verdad que hay gente que se pasa en el tema Lgtbi, pero es que no merecéis ningún respeto, no tiene sentido que os quejéis de que no tenéis los suficientes derechos con respecto a los hombres cuando igual tenéis hasta más que nosotros.', answeringto: 43, tweetid: 46, answeredby: 47},
      {id: 26, text: 'Calla puto imbécil, que estoy seguro de que ni siquiera sabes lo que es la única mujer que te ha querido en tu vida.', answeringto: 1, tweetid: 48, answeredby: 49},
      {id: 27, text: 'Aunque te haya insultado solo demuestras lo poco que razonas, siempre hay tiempo para entender el otro punto de vista y aprender a respetar al género opuesto.', answeringto: 49, tweetid: 50, answeredby: 51},
      {id: 28, text: 'Diciendo eso solo demuestras que no tienes forma de defender tu forma de actuar, porque sorpresa, es indefendible', answeringto: 51, tweetid: 52, answeredby: 53},
      {id: 29, text: 'Uy perdona te ofendí dicientote la verdad eh?', answeringto: 53, tweetid: 54},
      {id: 30, text: 'Juro que persona más retrasada no la he visto en mi vida colega, estás seguro que no te estás esforzando mucho usando tus pocas neuronas para escribir?', answeringto: 51, tweetid: 55, answeredby: 56},
      {id: 31, text: 'Que te den.', answeringto: 56, tweetid: 57},
      {id: 32, text: 'Claro que te insulto gilipollas, las personas como tú son las que deberían tener menos derechos, no las mujeres.', answeringto: 49, tweetid: 58, answeredby: 59},
      {id: 33, text: 'La cantidad de mujeres asesinadas, violadas, con miedo de si volverán a casa, cobrando menos o siendo menospreciadas nos olvidamos de ellas o que?', answeringto: 59, tweetid: 60, answeredby: 61},
      {id: 34, text: 'Uy perdona te ofendí dicientote la verdad eh?', answeringto: 61, tweetid: 62},
      {id: 35, text: 'Pero tu eres tonto? Ojalá fueras tu uno de esos en la cárcel, payaso.', answeringto: 59, tweetid: 63, answeredby: 64},
      {id: 36, text: 'Que te den.', answeringto: 64, tweetid: 65},


    ]
    const openvideo = () => {
      setVideo(true);
    }
    const closevideo = () => {
      setVideo(false);
    }
    const handleAnswer = (tweetid, answeredby) => {
      if (answeredby == null) {
        setCurrentTweet(tweetid)
      } 
      else {
        setCurrentTweet(answeredby)
      }
      setTweets((prevTweets) =>{
        return prevTweets.map((tweet) => {
          if(tweet.id === tweetid || tweet.id === answeredby) {
            tweet.show = true;
          }
          return tweet;
        })
      })
    }
    const scrollBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      })
    }
    if (video) {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    }
    else {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    }
    useEffect(() => {
      scrollBottom();
    }, [tweets])
    return (
  
      <div className="App">
        {tweets.filter(tweet => tweet.show).map(tweet => <Tweet key={tweet.id} text={tweet.text} likes = {tweet.likes} retweets = {tweet.retweets} quoted = {tweet.quoted} user = {tweet.user} date = {new Date().toLocaleString('es-ES', { day: 'numeric', month:'short', year:'numeric', hour12: false })} hour = {new Date().toLocaleString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: false })} name = {tweet.name} />)}      
        {}
        {showAnswers?  
            answers.filter(answer => answer.answeringto == currentTweet).map(answer => <Answer key={answer.id}>
            <button onClick={() => {handleAnswer(answer.tweetid, answer.answeredby);}} >{answer.text}</button>
            </Answer>) : null}
        {tweets[currentTweet-1].ending ? 
          <div className='buttone'>
            <button className='buttonm' onClick={()=>{openvideo()}}>Ver vídeo</button>
            <button className='buttonm' onClick={()=>{gotomenu()}}>Volver al menú</button>
          </div>
        : null}
        {video? (<Video closevideo={closevideo} id={tweets[currentTweet-1].endingid}/>): null}
      </div>
    );
}

export default Mainapp;
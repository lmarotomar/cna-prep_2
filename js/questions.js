const allBatteries = [
    {
        name: "Simulacro Mixto 1",
        questions: [
            // 1. Safety
            {
                text_en: "Which of the following is the most effective way to prevent the spread of infection?",
                text_es: "¿Cuál de las siguientes es la forma más eficaz de prevenir la propagación de infecciones?",
                options_en: ["Wearing gloves at all times", "Proper handwashing for at least 20 seconds", "Using hand sanitizer once a shift", "Wearing a mask for all residents"],
                options_es: ["Usar guantes en todo momento", "Lavado de manos adecuado durante al menos 20 segundos", "Usar desinfectante de manos una vez por turno", "Usar mascarilla con todos los residentes"],
                correct: 1,
                reason_en: "Handwashing is the single most important technique for infection control.",
                reason_es: "El lavado de manos es la técnica más importante para el control de infecciones."
            },
            // 2. Mobility
            {
                text_en: "When using a mechanical lift, what is the most important safety check?",
                text_es: "Al utilizar un elevador mecánico, ¿cuál es el control de seguridad más importante?",
                options_en: ["Checking the battery level", "Ensuring the sling is appropriate for the resident's weight and condition", "Telling the resident to hold on tight", "Moving the lift as quickly as possible"],
                options_es: ["Comprobar el nivel de la batería", "Asegurarse de que el arnés sea adecuado para el peso y la condición del residente", "Decirle al residente que se sujete fuerte", "Mover el elevador lo más rápido posible"],
                correct: 1,
                reason_en: "Using an incorrect or damaged sling can lead to serious falls and injury.",
                reason_es: "El uso de un arnés incorrecto o dañado puede provocar caídas y lesiones graves."
            },
            // 3. Specialized Care
            {
                text_en: "A resident has a 'Nasogastric Tube' (NG Tube). The CNA should ensure that the head of the bed is at which angle during feeding?",
                text_es: "Un residente tiene un 'Tubo Nasogástrico' (Tubo NG). El CNA debe asegurarse de que la cabecera de la cama esté en qué ángulo durante la alimentación?",
                options_en: ["Flat (0 degrees)", "15-20 degrees", "At least 30-45 degrees (Semi-Fowler's)", "90 degrees (High-Fowler's) only"],
                options_es: ["Plana (0 grados)", "15-20 grados", "Al menos 30-45 grados (Semi-Fowler)", "90 grados (High-Fowler) solamente"],
                correct: 2,
                reason_en: "Elevating the head of the bed prevents aspiration, which is a common risk with tube feeding.",
                reason_es: "Elevar la cabecera de la cama previene la aspiración, que es un riesgo común con la alimentación por tubo."
            },
            // 4. Mental Health
            {
                text_en: "A resident with Alzheimer's disease is repeatedly asking to 'go home'. The CNA's best response is:",
                text_es: "Un residente con enfermedad de Alzheimer pide repetidamente 'ir a casa'. La mejor respuesta del CNA es:",
                options_en: ["Tell them they live here now", "Ignore the question so they don't get upset", "Use 'validation' by asking them to tell you about their home", "Call the nurse to give them a sedative"],
                options_es: ["Decirles que ahora viven aquí", "Ignorar la pregunta para que no se enfaden", "Usar la 'validación' pidiéndoles que te cuenten sobre su casa", "Llamar a la enfermera para que les dé un sedante"],
                correct: 2,
                reason_en: "Validation therapy focuses on the resident's feelings rather than correcting their reality.",
                reason_es: "La terapia de validación se centra en los sentimientos del residente en lugar de corregir su realidad."
            },
            // 5. Personal Care
            {
                text_en: "While performing perineal care on a female resident, the CNA should wipe:",
                text_es: "Al realizar el cuidado perineal a una residente mujer, el CNA debe limpiar:",
                options_en: ["Back to front", "Front to back", "In a circular motion", "Only the outer labia"],
                options_es: ["De atrás hacia adelante", "De adelante hacia atrás", "En movimiento circular", "Sólo los labios externos"],
                correct: 1,
                reason_en: "Wiping front to back prevents the spread of bacteria from the rectum to the urinary tract (reducing UTI risk).",
                reason_es: "Limpiar de adelante hacia atrás evita la propagación de bacterias desde el recto hacia el tracto urinario (reduciendo el riesgo de ITU)."
            },
            // 6. Safety
            {
                text_en: "The acronym 'RACE' in fire safety stands for:",
                text_es: "El acrónimo 'RACE' en seguridad contra incendios significa:",
                options_en: ["Run, Alarm, Call, Exit", "Rescue, Alarm, Contain, Extinguish", "Remove, Act, Close, Evacuate", "Rescue, Aim, Contain, Exit"],
                options_es: ["Correr, Alarma, Llamar, Salir", "Rescatar, Alarma, Contener, Extinguir", "Retirar, Actuar, Cerrar, Evacuar", "Rescatar, Apuntar, Contener, Salir"],
                correct: 1,
                reason_en: "RACE is the standard protocol for healthcare staff during a fire emergency.",
                reason_es: "RACE es el protocolo estándar para el personal sanitario durante una emergencia por incendio."
            },
            // 7. Mobility
            {
                text_en: "Before assisting a resident to 'Dangle', the CNA must first:",
                text_es: "Antes de ayudar a un residente a Hacer 'Dangle' (sentarse al borde de la cama), el CNA debe primero:",
                options_en: ["Give them water", "Check their pulse", "Ensure the bed is in the lowest position and locked", "Ask them to stand up quickly"],
                options_es: ["Darles agua", "Comprobar su pulso", "Asegurarse de que la cama esté en la posición más baja y bloqueada", "Pedirles que se levanten rápido"],
                correct: 2,
                reason_en: "Locking the bed and lowering it ensures safety and prevents falls during the transition.",
                reason_es: "Bloquear la cama y bajarla garantiza la seguridad y evita caídas durante la transición."
            },
            // 8. Specialized Care
            {
                text_en: "What is the primary purpose of 'Range of Motion' (ROM) exercises?",
                text_es: "¿Cuál es el objetivo principal de los ejercicios de 'Rango de Movimiento' (ROM)?",
                options_en: ["To make the resident tired", "To prevent contractures and muscle atrophy", "To improve appetite", "To check the resident's weight"],
                options_es: ["Cansar al residente", "Prevenir contracturas y atrofia muscular", "Mejorar el apetito", "Comprobar el peso del residente"],
                correct: 1,
                reason_en: "ROM helps maintain joint flexibility and muscle health in immobile residents.",
                reason_es: "El ROM ayuda a mantener la flexibilidad de las articulaciones y la salud muscular en residentes inmóviles."
            },
            // 9. Infection Control
            {
                text_en: "Standard precautions should be used for:",
                text_es: "Las precauciones estándar deben utilizarse para:",
                options_en: ["Only residents with known infections", "Only residents in isolation", "Every resident, regardless of their diagnosis", "Only when the nurse says so"],
                options_es: ["Sólo residentes con infecciones conocidas", "Sólo residentes en aislamiento", "Todos los residentes, independientemente de su diagnóstico", "Sólo cuando la enfermera lo diga"],
                correct: 2,
                reason_en: "Standard precautions assume all body fluids are potentially infectious.",
                reason_es: "Las precauciones estándar asumen que todos los fluidos corporales son potencialmente infecciosos."
            },
            // 10. End-of-Life
            {
                text_en: "A resident's 'Advance Directive' is a document that:",
                text_es: "La 'Directiva Anticipada' de un residente es un documento que:",
                options_en: ["States who gets their property", "Outlines their wishes for medical care if they cannot speak for themselves", "Gives the CNA permission to perform tests", "Is only for residents with a terminal illness"],
                options_es: ["Indica quién se queda con sus bienes", "Describe sus deseos de atención médica si no pueden hablar por sí mismos", "Da permiso al CNA para realizar pruebas", "Es sólo para residentes con una enfermedad terminal"],
                correct: 1,
                reason_en: "Advance directives guide medical treatment based on the resident's prior choices.",
                reason_es: "Las directivas anticipadas guían el tratamiento médico basándose en las elecciones previas del residente."
            },
            // 11. Fundamentals
            {
                text_en: "The CNA observes a red area on a resident's coccyx. The CNA should:",
                text_es: "El CNA observa un área roja en el cóccix de un residente. El CNA debe:",
                options_en: ["Massage the area to improve blood flow", "Apply lotion and ignore it", "Report it to the nurse immediately", "Turn the resident every 4 hours instead of 2"],
                options_es: ["Masajear la zona para mejorar el flujo sanguíneo", "Aplicar loción e ignorarlo", "Informar a la enfermera inmediatamente", "Girar al residente cada 4 horas en lugar de 2"],
                correct: 2,
                reason_en: "Redness is a sign of a Stage 1 pressure ulcer; massaging it can cause further tissue damage.",
                reason_es: "El enrojecimiento es un signo de una úlcera por presión de Estadio 1; masajearla puede causar más daño al tejido."
            },
            // 12. Nutrition
            {
                text_en: "If a resident is on a 'Restricted Fluid' diet, the CNA should:",
                text_es: "Si un residente tiene una dieta de 'Restricción de Líquidos', el CNA debe:",
                options_en: ["Only give water with meals", "Give the resident as much as they want but don't record it", "Carefully measure and record all fluid intake and output (I&O)", "Ask the family to bring in drinks"],
                options_es: ["Sólo dar agua con las comidas", "Dar al residente todo lo que quiera pero no anotarlo", "Medir y registrar cuidadosamente todos los líquidos ingeridos y eliminados (I&O)", "Pedir a la familia que traiga bebidas"],
                correct: 2,
                reason_en: "Accurate I&O is critical for residents with fluid restrictions (often due to heart or kidney issues).",
                reason_es: "Un registro exacto de I&O es crítico para residentes con restricciones de líquidos (a menudo por problemas cardíacos o renales)."
            },
            // 13. Safety
            {
                text_en: "When drying a resident's feet, it is most important to dry:",
                text_es: "Al secar los pies de un residente, lo más importante es secar:",
                options_en: ["The heels", "The ankles", "Between the toes", "The top of the foot"],
                options_es: ["Los talones", "Los tobillos", "Entre los dedos", "La parte superior del pie"],
                correct: 2,
                reason_en: "Moisture between the toes can lead to fungal infections and skin breakdown.",
                reason_es: "La humedad entre los dedos puede provocar infecciones fúngicas y rotura de la piel."
            },
            // 14. Mental Health
            {
                text_en: "What is 'Sundowning'?",
                text_es: "¿Qué es el 'Sundowning' (Sindrome del Ocaso)?",
                options_en: ["A resident feeling better in the morning", "Increased confusion and agitation in the late afternoon and evening", "A resident wanting to watch the sunset", "A type of medication used for sleep"],
                options_es: ["Un residente que se siente mejor por la mañana", "Aumento de la confusión y agitación a última hora de la tarde y noche", "Un residente que quiere ver la puesta de sol", "Un tipo de medicación utilizada para dormir"],
                correct: 1,
                reason_en: "Sundowning is common in individuals with dementia or Alzheimer's.",
                reason_es: "El 'Sundowning' es común en personas con demencia o Alzheimer."
            },
            // 15. Specialized Care
            {
                text_en: "A resident has 'Dysphagia'. The CNA should expect the diet to include:",
                text_es: "Un residente tiene 'Disfagia'. El CNA debe esperar que la dieta incluya:",
                options_en: ["Hard candy", "Thickened liquids", "Steak and potatoes", "Lots of thin water"],
                options_es: ["Caramelos duros", "Líquidos espesados", "Filete y patatas", "Mucha agua ligera"],
                correct: 1,
                reason_en: "Thickened liquids are easier to swallow and reduce the risk of aspiration for residents with dysphagia.",
                reason_es: "Los líquidos espesados son más fáciles de tragar y reducen el riesgo de aspiración para residentes con disfagia."
            },
            // 16. Infection Control
            {
                text_en: "The proper way to handle soiled linens is to:",
                text_es: "La forma correcta de manipular la ropa de cama sucia es:",
                options_en: ["Shake them to remove crumbs", "Hold them away from your uniform and place them in a leak-proof bag", "Carry them in your arms to the laundry room", "Place them on the floor until the bed is finished"],
                options_es: ["Sacudirlos para quitar las migas", "Mantenerlos alejados de su uniforme y colocarlos en una bolsa a prueba de fugas", "Llevarlos en los brazos hasta la lavandería", "Colocarlos en el suelo hasta terminar la cama"],
                correct: 1,
                reason_en: "Linens should never touch the floor or your clothing to prevent cross-contamination.",
                reason_es: "La ropa de cama nunca debe tocar el suelo ni su ropa para evitar la contaminación cruzada."
            },
            // 17. Mobility
            {
                text_en: "When a resident is 'Ambulating' with a walker, the CNA should stay on the:",
                text_es: "Cuando un residente está 'Ambulando' (caminando) con un andador, el CNA debe permanecer en el lado:",
                options_en: ["Stronger side", "Weaker side and slightly behind", "In front of the resident", "In the hallway"],
                options_es: ["Lado más fuerte", "Lado más débil y ligeramente detrás", "Frente al residente", "En el pasillo"],
                correct: 1,
                reason_en: "Supporting the weaker side provides better stability if the resident starts to fall.",
                reason_es: "Apoyar el lado más débil proporciona una mejor estabilidad si el residente empieza a caer."
            },
            // 18. Personal Care
            {
                text_en: "When assisting a resident with a weak side to dress, which side should the CNA dress first?",
                text_es: "Al ayudar a vestirse a un residente con un lado débil, ¿qué lado debe vestir primero el CNA?",
                options_en: ["The strong side", "The weak side", "It doesn't matter", "The side closest to the resident"],
                options_es: ["El lado fuerte", "El lado débil", "No importa", "El lado más cercano al residente"],
                correct: 1,
                reason_en: "Dressing the weak side first (DAW: Dress Affected Weak) allows for easier movement of the stronger arm/leg.",
                reason_es: "Vestir primero el lado débil (DAW: Dress Affected Weak) permite un movimiento más fácil del brazo/pierna más fuerte."
            },
            // 19. Specialized Care
            {
                text_en: "A resident is having a 'Seizure'. The CNA should:",
                text_es: "Un residente está teniendo una 'Convulsión'. El CNA debe:",
                options_en: ["Place a spoon in their mouth to prevent tongue biting", "Restrain the resident's arms and legs", "Protect the resident's head and clear the area of sharp objects", "Yell at the resident to stop"],
                options_es: ["Colocar una cuchara en su boca para evitar que se muerda la lengua", "Sujetar los brazos y las piernas del residente", "Proteger la cabeza del residente y despejar la zona de objetos punzantes", "Gritarle al residente para que pare"],
                correct: 2,
                reason_en: "Never place objects in the mouth or restrain a seizing person; focus on preventing injury.",
                reason_es: "Nunca coloque objetos en la boca ni sujete a una persona que convulsiona; céntrese en prevenir lesiones."
            },
            // 20. End-of-Life
            {
                text_en: "Post-mortem care is performed:",
                text_es: "Los cuidados post-mortem se realizan:",
                options_en: ["Before the resident dies", "Immediately after the doctor pronounces the death", "Only if the family is not there", "The next day"],
                options_es: ["Antes de que el residente muera", "Inmediatamente después de que el médico certifique el fallecimiento", "Sólo si la familia no está presente", "Al día siguiente"],
                correct: 1,
                reason_en: "Post-mortem care prepares the body for viewing and transport to the morgue/funeral home.",
                reason_es: "El cuidado post-mortem prepara el cuerpo para ser visto y transportado a la morgue/funeraria."
            },
            // 21. Specialized Care
            {
                text_en: "When providing 'Oral Care' to an unconscious resident, the CNA should:",
                text_es: "Al proporcionar 'Cuidado Bucal' a un residente inconsciente, el CNA debe:",
                options_en: ["Use a regular toothbrush and paste", "Turn the resident's head to the side to prevent aspiration", "Ask the resident to rinse their mouth", "Use a large amount of water"],
                options_es: ["Usar un cepillo y pasta normales", "Girar la cabeza del residente hacia un lado para evitar la aspiración", "Pedir al residente que se enjuague la boca", "Usar una gran cantidad de agua"],
                correct: 1,
                reason_en: "Turning the head to the side is a critical safety step to prevent fluid from Entering the lungs.",
                reason_es: "Girar la cabeza hacia un lado es un paso de seguridad crítico para evitar que el líquido entre en los pulmones."
            },
            // 22. Safety
            {
                text_en: "What should the CNA do FIRST if they find an unconscious resident on the floor?",
                text_es: "¿Qué debe hacer el CNA PRIMERO si encuentra a un residente inconsciente en el suelo?",
                options_en: ["Move the resident to a chair", "Call for help/nurse immediately", "Check for a pulse", "Start CPR"],
                options_es: ["Mover al residente a una silla", "Llamar a pedir ayuda/a la enfermera inmediatamente", "Comprobar el pulso", "Iniciar RCP"],
                correct: 1,
                reason_en: "Calling for help ensures that medical professionals are on the way before starting assessment.",
                reason_es: "Llamar para pedir ayuda garantiza que los profesionales médicos estén en camino antes de iniciar la evaluación."
            },
            // 23. Infection Control
            {
                text_en: "A resident is on 'Contact Precautions'. What PPE is required?",
                text_es: "Un residente está en 'Precauciones de Contacto'. ¿Qué EPP (PPE) se requiere?",
                options_en: ["Mask and gloves", "Gown and gloves", "N95 respirator and goggles", "Gloves only"],
                options_es: ["Mascarilla y guantes", "Bata y guantes", "Respirador N95 y gafas", "Guantes solamente"],
                correct: 1,
                reason_en: "Gown and gloves prevent the transfer of germs from the resident's environment to the CNA's skin or clothing.",
                reason_es: "La bata y los guantes evitan la transferencia de gérmenes del entorno del residente a la piel o ropa del CNA."
            },
            // 24. Mobility
            {
                text_en: "When 'Logrolling' a resident, the CNA should ensure:",
                text_es: "Al hacer 'Logrolling' (rodar en bloque) a un residente, el CNA debe asegurarse de:",
                options_en: ["The resident's head is moved first", "The head, back, and legs are moved in one straight line", "The resident's arms are above their head", "The legs are crossed"],
                options_es: ["Mover primero la cabeza del residente", "Mover la cabeza, la espalda y las piernas en una línea recta", "Los brazos del residente están sobre su cabeza", "Las piernas están cruzadas"],
                correct: 1,
                reason_en: "Logrolling is used to keep the spine straight for residents with back or neck injuries.",
                reason_es: "El 'Logrolling' se utiliza para mantener la columna recta en residentes con lesiones de espalda o cuello."
            },
            // 25. Mental Health
            {
                text_en: "A resident is crying because their spouse passed away last week. The CNA should:",
                text_es: "Un residente llora porque su cónyuge falleció la semana pasada. El CNA debe:",
                options_en: ["Tell them it will be okay", "Change the subject quickly", "Listen and allow the resident to express their grief", "Tell them they are lucky to have lived a long life"],
                options_es: ["Decirles que todo estará bien", "Cambiar de tema rápidamente", "Escuchar y permitir que el residente exprese su duelo", "Decirles que tienen suerte de haber vivido una vida larga"],
                correct: 2,
                reason_en: "Emotional support and listening are key to helping residents through the grieving process.",
                reason_es: "El apoyo emocional y la escucha son claves para ayudar a los residentes durante el proceso de duelo."
            },
            // 26. Safety
            {
                text_en: "The best way to identify a resident before providing care is to:",
                text_es: "La mejor forma de identificar a un residente antes de proporcionarle cuidados es:",
                options_en: ["Call them by name and wait for a response", "Check their identification (ID) bracelet", "Ask their roommate who they are", "Look at the name on the door"],
                options_es: ["Llamarlos por su nombre y esperar una respuesta", "Comprobar su pulsera de identificación (ID)", "Preguntar a su compañero de cuarto quiénes son", "Mirar el nombre en la puerta"],
                correct: 1,
                reason_en: "An ID bracelet is the most reliable way to confirm identity, especially for confused residents.",
                reason_es: "La pulsera de ID es la forma más fiable de confirmar la identidad, especialmente en residentes confundidos."
            },
            // 27. Fundamentals
            {
                text_en: "What is 'Objective Data'?",
                text_es: "¿Qué son los 'Datos Objetivos'?",
                options_en: ["What the resident tells you they feel", "Information you can see, hear, feel, or measure", "Predictions about the future", "A resident's opinion"],
                options_es: ["Lo que el residente te dice que siente", "Información que puedes ver, oír, sentir o medir", "Predicciones sobre el futuro", "La opinión de un residente"],
                correct: 1,
                reason_en: "Objective data consists of facts (signs) rather than subjective feelings (symptoms).",
                reason_es: "Los datos objetivos consisten en hechos (signos) en lugar de sentimientos subjetivos (síntomas)."
            },
            // 28. Specialized Care
            {
                text_en: "A 'Foley Catheter' bag should always be kept:",
                text_es: "La bolsa de una 'Sonda Foley' debe mantenerse siempre:",
                options_en: ["On the resident's lap", "Above the level of the bladder", "Below the level of the bladder", "Hanging from the side rail"],
                options_es: ["En el regazo del residente", "Por encima del nivel de la vejiga", "Por debajo del nivel de la vejiga", "Colgando de la barandilla lateral"],
                correct: 2,
                reason_en: "Keeping the bag below the bladder prevents urine from flowing back into the bladder (reducing infection risk).",
                reason_es: "Mantener la bolsa por debajo de la vejiga evita que la orina retroceda hacia la vejiga (reduciendo el riesgo de infección)."
            },
            // 29. Nutrition
            {
                text_en: "When feeding a resident, the CNA should offer fluids:",
                text_es: "Al alimentar a un residente, el CNA debe ofrecer líquidos:",
                options_en: ["Only at the end of the meal", "Only at the beginning", "Frequently throughout the meal", "Only if the resident asks"],
                options_es: ["Sólo al final de la comida", "Sólo al principio", "Frecuentemente durante la comida", "Sólo si el residente lo pide"],
                correct: 2,
                reason_en: "Alternating food and fluids makes swallowing easier and prevents dehydration.",
                reason_es: "Alternar alimentos y líquidos facilita la deglución y previene la deshidratación."
            },
            // 30. Mobility
            {
                text_en: "To prevent skin breakdown, a bedbound resident should be repositioned at least every:",
                text_es: "Para prevenir roturas de la piel, un residente en cama debe ser reposicionado al menos cada:",
                options_en: ["1 hour", "2 hours", "4 hours", "Once a shift"],
                options_es: ["1 hora", "2 horas", "4 horas", "Una vez por turno"],
                correct: 1,
                reason_en: "The standard protocol for turning residents is every 2 hours to relieve pressure.",
                reason_es: "El protocolo estándar para girar a los residentes es cada 2 horas para aliviar la presión."
            },
            // 31. Safety
            {
                text_en: "What should you do FIRST when using a fire extinguisher (PASS)?",
                text_es: "¿Qué debe hacer PRIMERO al usar un extintor (PASS)?",
                options_en: ["Aim at the base of the fire", "Pull the pin", "Squeeze the handle", "Sweep from side to side"],
                options_es: ["Apuntar a la base del fuego", "Tirar del pasador (Pull)", "Apretar el mango (Squeeze)", "Barrer (Sweep) de lado a lado"],
                correct: 1,
                reason_en: "PASS stands for Pull, Aim, Squeeze, Sweep.",
                reason_es: "PASS significa Tirar, Apuntar, Apretar, Barrer."
            },
            // 32. Infection Control
            {
                text_en: "What is an 'HAI' (Healthcare-Associated Infection)?",
                text_es: "¿Qué es una 'HAI' (Infección Asociada a la Atención Sanitaria)?",
                options_en: ["An infection the resident had before arriving", "An infection acquired during a stay in a healthcare facility", "A genetic disorder", "A type of vaccine"],
                options_es: ["Una infección que el residente tenía antes de llegar", "Una infección adquirida durante la estancia en un centro sanitario", "Un trastorno genético", "Un tipo de vacuna"],
                correct: 1,
                reason_en: "HAIs are a major safety concern in nursing homes and hospitals.",
                reason_es: "Las HAI son un gran problema de seguridad en residencias y hospitales."
            },
            // 33. Mental Health
            {
                text_en: "A resident is pacing the hallway and seems agitated. The CNA should:",
                text_es: "Un residente camina de un lado a otro y parece agitado. El CNA debe:",
                options_en: ["Tell them to sit down immediately", "Walk with the resident and use a calm, low voice", "Lock them in their room", "Ignore them until they calm down"],
                options_es: ["Decirles que se sienten inmediatamente", "Caminar con el residente y usar una voz calmada y baja", "Encerrarlos en su habitación", "Ignorarlos hasta que se calmen"],
                correct: 1,
                reason_en: "Staying calm and walking with the resident can help de-escalate agitation.",
                reason_es: "Mantener la calma y caminar con el residente puede ayudar a reducir la agitación."
            },
            // 34. Physical Health
            {
                text_en: "Which of the following is a normal pulse rate for an adult?",
                text_es: "¿Cuál de los siguientes es un pulso normal para un adulto?",
                options_en: ["40-50 bpm", "60-100 bpm", "110-130 bpm", "140-160 bpm"],
                options_es: ["40-50 lpm", "60-100 lpm", "110-130 lpm", "140-160 lpm"],
                correct: 1,
                reason_en: "60-100 beats per minute is the typical resting range for an adult.",
                reason_es: "60-100 latidos por minuto es el rango normal en reposo para un adulto."
            },
            // 35. Specialized Care
            {
                text_en: "A resident with diabetes needs their toenails trimmed. The CNA should:",
                text_es: "Un residente con diabetes necesita que le corten las uñas de los pies. El CNA debe:",
                options_en: ["Cut the nails carefully in a curve", "Report it to the nurse or podiatrist", "Ask the resident's family to do it", "Cut them straight across with sharp scissors"],
                options_es: ["Cortar las uñas con cuidado en curva", "Informar a la enfermera o al podólogo", "Pedir a la familia del residente que lo haga", "Cortarlas rectas con tijeras afiladas"],
                correct: 1,
                reason_en: "CNAs generally do NOT cut the nails of diabetic residents due to the high risk of infection and poor healing.",
                reason_es: "Los CNA generalmente NO cortan las uñas de residentes diabéticos debido al alto riesgo de infección y mala cicatrización."
            },
            // 36. Safety
            {
                text_en: "The CNA finds a resident smoking in bed. The CNA should:",
                text_es: "El CNA encuentra a un residente fumando en la cama. El CNA debe:",
                options_en: ["Tell the resident they will be in trouble", "Take the cigarette and report it to the nurse immediately", "Open the window to let the smoke out", "Remind them to use an ashtray"],
                options_es: ["Decirle al residente que tendrá problemas", "Quitarle el cigarrillo e informar a la enfermera de inmediato", "Abrir la ventana para que salga el humo", "Recordarles que usen un cenicero"],
                correct: 1,
                reason_en: "Smoking in bed is a severe fire hazard in healthcare settings.",
                reason_es: "Fumar en la cama es un grave peligro de incendio en los centros sanitarios."
            },
            // 37. Fundamentals
            {
                text_en: "What should a CNA do if they suspect a resident is being abused?",
                text_es: "¿Qué debe hacer un CNA si sospecha que un residente está siendo maltratado?",
                options_en: ["Ask the resident if it's true", "Report it to the supervisor/nurse immediately", "Keep a secret to protect the facility", "Warn the person they suspect"],
                options_es: ["Preguntar al residente si es verdad", "Informar al supervisor/enfermera de inmediato", "Mantenerlo en secreto para proteger al centro", "Advertir a la persona sospechosa"],
                correct: 1,
                reason_en: "CNAs are mandatory reporters for any suspicion of abuse.",
                reason_es: "Los CNA son informadores obligatorios ante cualquier sospecha de maltrato."
            },
            // 38. Mobility
            {
                text_en: "When carrying heavy objects, the CNA should:",
                text_es: "Al cargar objetos pesados, el CNA debe:",
                options_en: ["Bend at the waist", "Keep the object close to the body and bend at the knees", "Twist the torso while lifting", "Keep legs straight"],
                options_es: ["Doblar la cintura", "Mantener el objeto cerca del cuerpo y doblar las rodillas", "Girar el torso mientras levanta", "Mantener las piernas rectas"],
                correct: 1,
                reason_en: "Proper body mechanics prevent back injuries.",
                reason_es: "La mecánica corporal adecuada previene lesiones de espalda."
            },
            // 39. Personal Care
            {
                text_en: "When brushing a resident's teeth, you should hold the brush at which angle to the gums?",
                text_es: "Al cepillar los dientes de un residente, ¿en qué ángulo debe sujetar el cepillo respecto a las encías?",
                options_en: ["90 degrees", "45 degrees", "180 degrees", "Angle doesn't matter"],
                options_es: ["90 grados", "45 grados", "180 grados", "El ángulo no importa"],
                correct: 1,
                reason_en: "A 45-degree angle is most effective at removing plaque from the gum line.",
                reason_es: "Un ángulo de 45 grados es más eficaz para eliminar la placa de la línea de las encías."
            },
            // 40. Infection Control
            {
                text_en: "An 'N95 respirator' is required for residents on which type of precautions?",
                text_es: "Se requiere un 'Respirador N95' para residentes con qué tipo de precauciones?",
                options_en: ["Contact", "Droplet", "Airborne", "Standard"],
                options_es: ["Contacto", "Gotas (Droplet)", "Aéreas (Airborne)", "Estándar"],
                correct: 2,
                reason_en: "Airborne precautions (like for Tuberculosis) require special respirators to filter small particles.",
                reason_es: "Las precauciones aéreas (como para la Tuberculosis) requieren respiradores especiales para filtrar partículas pequeñas."
            },
            // 41. Hygiene
            {
                text_en: "When shaving a resident's face with a disposable razor, you should shave in which direction?",
                text_es: "Al afeitar la cara de un residente con una cuchilla desechable, ¿en qué dirección debe afeitar?",
                options_en: ["Against the direction of hair growth", "In the direction of hair growth", "In circular motions", "It doesn't matter"],
                options_es: ["En contra de la dirección del crecimiento del vello", "En la dirección del crecimiento del vello", "En movimientos circulares", "No importa"],
                correct: 1,
                reason_en: "Shaving in the direction of hair growth prevents irritation and cuts.",
                reason_es: "Afeitar en la dirección del crecimiento del vello previene irritaciones y cortes."
            },
            // 42. Safety
            {
                text_en: "What is the primary purpose of a 'Gait Belt'?",
                text_es: "¿Cuál es el objetivo principal de un 'Cinturón de Marcha' (Gait Belt)?",
                options_en: ["To keep the resident's pants up", "To provide a secure point for the CNA to assist with transfers and walking", "To restrain the resident in a chair", "To measure the resident's weight"],
                options_es: ["Para sujetar los pantalones del residente", "Para proporcionar un punto seguro para que el CNA ayude en traslados y deambulación", "Para sujetar al residente a una silla", "Para medir la cintura del residente"],
                correct: 1,
                reason_en: "Gait belts improve safety for both the resident and the CNA during mobility tasks.",
                reason_es: "Los cinturones de marcha mejoran la seguridad tanto del residente como del CNA durante las tareas de movilidad."
            },
            // 43. Physical Health
            {
                text_en: "A resident's blood pressure is 150/90. This is considered:",
                text_es: "La presión arterial de un residente es 150/90. Esto se considera:",
                options_en: ["Normal", "Hypotension", "Hypertension", "Perfect"],
                options_es: ["Normal", "Hipotensión", "Hipertensión", "Perfecta"],
                correct: 2,
                reason_en: "Hypertension (high blood pressure) is generally defined as 140/90 or higher.",
                reason_es: "La hipertensión (presión arterial alta) se define generalmente como 140/90 o más."
            },
            // 44. Specialized Care
            {
                text_en: "When using a 'Pulse Oximeter', what does the device measure?",
                text_es: "Al usar un 'Pulsioxímetro', ¿qué mide el dispositivo?",
                options_en: ["Blood pressure", "Blood sugar", "Oxygen saturation in the blood and heart rate", "Temperature"],
                options_es: ["Presión arterial", "Azúcar en sangre", "Saturación de oxígeno en sangre y frecuencia cardíaca", "Temperatura"],
                correct: 2,
                reason_en: "Pulse oximetry is a non-invasive way to monitor a resident's respiratory status.",
                reason_es: "La pulsioximetría es una forma no invasiva de controlar el estado respiratorio de un residente."
            },
            // 45. Fundamentals
            {
                text_en: "What does 'HIPAA' protect?",
                text_es: "¿Qué protege 'HIPAA'?",
                options_en: ["The healthcare facility's money", "The resident's private health information", "The CNA's job", "The doctor's reputation"],
                options_es: ["El dinero del centro sanitario", "La información de salud privada del residente", "El trabajo del CNA", "La reputación del médico"],
                correct: 1,
                reason_en: "HIPAA ensures that personal health information is kept confidential and secure.",
                reason_es: "HIPAA garantiza que la información personal de salud se mantenga confidencial y segura."
            },
            // 46. Personal Care
            {
                text_en: "How often should 'Oral Care' be provided to a resident who is NPO (Nothing by Mouth)?",
                text_es: "¿Con qué frecuencia se debe proporcionar 'Cuidado Bucal' a un residente que está NPO (Nada por Boca)?",
                options_en: ["Once a day", "Every 2 hours", "Only after meals", "Once a week"],
                options_es: ["Una vez al día", "Cada 2 horas", "Sólo después de las comidas", "Una vez por semana"],
                correct: 1,
                reason_en: "NPO residents' mouths become dry and prone to infection, requiring frequent care.",
                reason_es: "La boca de los residentes NPO se seca y es propensa a infecciones, requiriendo cuidados frecuentes."
            },
            // 47. Mental Health
            {
                text_en: "A resident with dementia is hitting another resident. The CNA should FIRST:",
                text_es: "Un residente con demencia está golpeando a otro residente. El CNA debe PRIMERO:",
                options_en: ["Yell for them to stop", "Physically separate the residents and ensure safety", "Report it to the nurse at the end of the shift", "Tell the resident they will lose their TV privileges"],
                options_es: ["Gritar para que paren", "Separar físicamente a los residentes y garantizar la seguridad", "Informar a la enfermera al final del turno", "Decirle al residente que perderá sus privilegios de TV"],
                correct: 1,
                reason_en: "Immediate safety is the priority; the CNA must intervene to prevent injury.",
                reason_es: "La seguridad inmediata es la prioridad; el CNA debe intervenir para evitar lesiones."
            },
            // 48. Specialized Care
            {
                text_en: "When a resident is receiving 'Oxygen Therapy', the CNA should:",
                text_es: "Cuando un residente recibe 'Oxigenoterapia', el CNA debe:",
                options_en: ["Apply petroleum jelly to the nostrils", "Ensure there are no sparks or open flames in the room", "Turn the oxygen flow up if the resident looks tired", "Switch the resident to a mask instead of a cannula"],
                options_es: ["Aplicar vaselina en los orificios nasales", "Asegurarse de que no haya chispas ni llamas abiertas en la habitación", "Aumentar el flujo de oxígeno si el residente parece cansado", "Cambiar al residente a una mascarilla en lugar de una cánula"],
                correct: 1,
                reason_en: "Oxygen supports combustion and is a major fire hazard.",
                reason_es: "El oxígeno favorece la combustión y es un grave peligro de incendio."
            },
            // 49. Hygiene
            {
                text_en: "When washing a resident's hands, the water temperature should be:",
                text_es: "Al lavar las manos de un residente, la temperatura del agua debe estar:",
                options_en: ["Between 105°F and 115°F", "As hot as the resident can stand", "Cold", "Ice water"],
                options_es: ["Entre 105°F y 115°F (aprox. 40-46°C)", "Tan caliente como el residente pueda soportar", "Fría", "Agua helada"],
                correct: 0,
                reason_en: "Water must be warm enough to be comfortable but not hot enough to cause burns.",
                reason_es: "El agua debe estar lo suficientemente caliente para ser cómoda, pero no tanto como para causar quemaduras."
            },
            // 50. Safety
            {
                text_en: "A 'Restraint-Free' environment means:",
                text_es: "Un entorno 'Libre de Restricciones' significa:",
                options_en: ["Restraints are never used, and alternative safety measures are in place", "Residents are locked in their rooms", "Residents must be tied to their chairs for safety", "Only physical restraints are used"],
                options_es: ["Nunca se usan restricciones y se aplican medidas de seguridad alternativas", "Los residentes están encerrados en sus habitaciones", "Los residentes deben estar atados a sus sillas por seguridad", "Sólo se usan restricciones físicas"],
                correct: 0,
                reason_en: "Restraints can cause physical and psychological harm; modern care focuses on alternatives.",
                reason_es: "Las restricciones pueden causar daño físico y psicológico; el cuidado moderno se centra en las alternativas."
            },
            // 51. Physical Health
            {
                text_en: "What is 'Tachycardia'?",
                text_es: "¿Qué es la 'Taquicardia'?",
                options_en: ["A slow heart rate (below 60 bpm)", "A fast heart rate (above 100 bpm)", "High blood pressure", "Difficulty breathing"],
                options_es: ["Un ritmo cardíaco lento (menos de 60 lpm)", "Un ritmo cardíaco rápido (más de 100 lpm)", "Presión arterial alta", "Dificultad para respirar"],
                correct: 1,
                reason_en: "Tachycardia is often a sign of stress, pain, fever, or medical issues.",
                reason_es: "La taquicardia suele ser un signo de estrés, dolor, fiebre o problemas médicos."
            },
            // 52. Specialized Care
            {
                text_en: "When assisting a resident into a wheelchair, the most important step is to:",
                text_es: "Al ayudar a un residente a sentarse en una silla de ruedas, el paso más importante es:",
                options_en: ["Unlock the brakes", "Lock the brakes and ensure the footrests are out of the way", "Tell the resident to jump into the chair", "Hold the resident by the arms"],
                options_es: ["Desbloquear los frenos", "Bloquear los frenos y asegurarse de que los reposapiés no estorben", "Decirle al residente que salte a la silla", "Sujetar al residente por los brazos"],
                correct: 1,
                reason_en: "Locked brakes prevent the chair from moving, which is the leading cause of falls during transfers.",
                reason_es: "Los frenos bloqueados evitan que la silla se mueva, que es la causa principal de caídas durante los traslados."
            },
            // 53. Fundamentals
            {
                text_en: "A resident's 'Scope of Practice' for a CNA means:",
                text_es: "El 'Alcance de la Práctica' (Scope of Practice) para un CNA significa:",
                options_en: ["The CNA can do anything the doctor asks", "The legal limits and duties of the CNA's job", "The CNA can give medications", "The CNA can diagnose residents"],
                options_es: ["El CNA puede hacer cualquier cosa que el médico pida", "Los límites legales y deberes del trabajo del CNA", "El CNA puede dar medicamentos", "El CNA puede diagnosticar a los residentes"],
                correct: 1,
                reason_en: "Performing tasks outside the scope of practice is illegal and dangerous.",
                reason_es: "Realizar tareas fuera del alcance de la práctica es ilegal y peligroso."
            },
            // 54. Personal Care
            {
                text_en: "When providing 'Denture Care', the CNA should first place which of the following in the sink?",
                text_es: "Al realizar el 'Cuidado de Dentaduras', ¿qué debe colocar PRIMERO el CNA en el lavabo?",
                options_en: ["A lot of soap", "A towel or washcloth to line the bottom", "A large rock", "Hot boiling water"],
                options_es: ["Mucho jabón", "Una toalla o paño para forrar el fondo", "Una piedra grande", "Agua hirviendo"],
                correct: 1,
                reason_en: "Lining the sink prevents the dentures from breaking if they are accidentally dropped.",
                reason_es: "Forrar el lavabo evita que las dentaduras se rompan si se caen accidentalmente."
            },
            // 55. Infection Control
            {
                text_en: "Where should the CNA dispose of a used razor?",
                text_es: "¿Dónde debe desechar el CNA una cuchilla de afeitar usada?",
                options_en: ["In the regular trash can", "In a 'Sharps' container", "In the laundry basket", "In the resident's drawer"],
                options_es: ["En el cubo de la basura normal", "En un contenedor de 'Sharps' (punzantes)", "En la cesta de la lavandería", "En el cajón del residente"],
                correct: 1,
                reason_en: "All sharps must go into puncture-resistant biohazard containers to prevent needle sticks/cuts.",
                reason_es: "Todos los objetos punzantes deben ir en contenedores de riesgo biológico resistentes a perforaciones para evitar pinchazos/cortes."
            },
            // 56. Mental Health
            {
                text_en: "What should the CNA do if a resident is masturbating in the public dining room?",
                text_es: "¿Qué debe hacer el CNA si un residente se está masturbando en el comedor público?",
                options_en: ["Yell at them to stop", "Quietly lead them to a private area like their room", "Ignore it", "Tell all the other residents"],
                options_es: ["Gritarles para que paren", "Guiarlos discretamente a un área privada como su habitación", "Ignorarlo", "Contárselo a todos los demás residentes"],
                correct: 1,
                reason_en: "Providing privacy and dignity is the priority while addressing inappropriate public behavior.",
                reason_es: "Garantizar la privacidad y la dignidad es la prioridad al abordar un comportamiento público inapropiado."
            },
            // 57. Physical Health
            {
                text_en: "Which of the following is a sign of 'Hypoglycemia' (low blood sugar)?",
                text_es: "¿Cuál de los siguientes es un signo de 'Hipoglucemia' (bajo nivel de azúcar en sangre)?",
                options_en: ["Excessive thirst", "Shakiness, sweating, and confusion", "Fruity-smelling breath", "Deep, fast breathing"],
                options_es: ["Sed excesiva", "Temblores, sudoración y confusión", "Aliento con olor a fruta", "Respiración profunda y rápida"],
                correct: 1,
                reason_en: "Low blood sugar is a medical emergency that requires fast-acting sugar.",
                reason_es: "El bajo nivel de azúcar en sangre es una emergencia médica que requiere azúcar de acción rápida."
            },
            // 58. Specialized Care
            {
                text_en: "A resident has a 'Cast' on their arm. The CNA should report if they see:",
                text_es: "Un residente tiene un 'Yeso' en su brazo. El CNA debe informar si ve:",
                options_en: ["The resident using the other arm", "Blue or cold fingers", "The cast feeling hard", "The resident sleeping"],
                options_es: ["El residente usando el otro brazo", "Dedos azules o fríos", "El yeso duro al tacto", "El residente durmiendo"],
                correct: 1,
                reason_en: "Blue or cold fingers indicate poor circulation, which is a medical emergency.",
                reason_es: "Los dedos azules o fríos indican mala circulación, lo que es una emergencia médica."
            },
            // 59. Fundamentals
            {
                text_en: "When a resident refuses a bath, the CNA should FIRST:",
                text_es: "Cuando un residente rechaza un baño, el CNA debe PRIMERO:",
                options_en: ["Force them to bathe for their own good", "Respect their refusal and try again later", "Call their family to complain", "Tell the nurse to give them a sedative"],
                options_es: ["Obligarlos a bañarse por su propio bien", "Respetar su rechazo e intentarlo más tarde", "Llamar a su familia para quejarse", "Decirle a la enfermera que les dé un sedante"],
                correct: 1,
                reason_en: "Residents have the right to refuse care; the CNA should try to understand why and re-approach later.",
                reason_es: "Los residentes tienen derecho a rechazar los cuidados; el CNA debe intentar comprender por qué y volver a intentarlo más tarde."
            },
            // 60. End-of-Life
            {
                text_en: "According to Elizabeth Kubler-Ross, the first stage of grief is:",
                text_es: "Según Elizabeth Kubler-Ross, la primera etapa del duelo es:",
                options_en: ["Anger", "Bargaining", "Denial", "Depression"],
                options_es: ["Ira (Anger)", "Negociación (Bargaining)", "Negación (Denial)", "Depresión"],
                correct: 2,
                reason_en: "Denial is often the mind's first defense against overwhelming loss.",
                reason_es: "La negación es a menudo la primera defensa de la mente contra una pérdida abrumadora."
            }
        ]
    },
    {
        name: "Simulacro Mixto 2",
        questions: [
            // 1. Vital Signs
            {
                text_en: "Which of the following is the most accurate way to measure a resident's 'Axillary' temperature?",
                text_es: "¿Cuál de las siguientes es la forma más exacta de medir la temperatura 'Axilar' de un residente?",
                options_en: ["Place the thermometer in the mouth", "Place the thermometer in the center of the dry armpit", "Use an ear probe", "Rub the skin before measuring"],
                options_es: ["Colocar el termómetro en la boca", "Colocar el termómetro en el centro de la axila seca", "Usar una sonda para el oído", "Frotar la piel antes de medir"],
                correct: 1,
                reason_en: "The armpit must be dry, and the thermometer bulb must be in direct contact with the skin.",
                reason_es: "La axila debe estar seca y el bulbo del termómetro debe estar en contacto directo con la piel."
            },
            // 2. Specialized Care
            {
                text_en: "When collecting a 'Mid-stream' urine specimen, the resident should:",
                text_es: "Al recoger una muestra de orina de 'Chorro Medio', el residente debe:",
                options_en: ["Urinate directly into the cup from the start", "Urinate a little, stop, then urinate into the sterile cup", "Collection can happen at any time of day", "Use a catheter"],
                options_es: ["Orinar directamente en el vaso desde el principio", "Orinar un poco, parar, y luego orinar en el vaso estéril", "La recogida puede hacerse en cualquier momento del día", "Usar una sonda"],
                correct: 1,
                reason_en: "Mid-stream collection reduces the risk of contamination from the external genitalia.",
                reason_es: "La recogida de chorro medio reduce el riesgo de contaminación de los genitales externos."
            },
            // 3. Physical Health
            {
                text_en: "What is the 'Systolic' blood pressure?",
                text_es: "¿Qué es la presión arterial 'Sistólica'?",
                options_en: ["The resting phase of the heart", "The pressure when the heart is contracting and pumping blood", "The bottom number of the reading", "The pulse rate"],
                options_es: ["La fase de reposo del corazón", "La presión cuando el corazón se contrae y bombea sangre", "El número inferior de la lectura", "La frecuencia del pulso"],
                correct: 1,
                reason_en: "Systolic pressure is the top number and represents the heart's active contraction.",
                reason_es: "La presión sistólica es el número superior y representa la contracción activa del corazón."
            },
            // 4. Specialized Care
            {
                text_en: "A resident is on 'Aspiration Precautions'. The CNA should:",
                text_es: "Un residente tiene 'Precauciones de Aspiración'. El CNA debe:",
                options_en: ["Feed the resident lying flat", "Keep the resident upright for at least 30 minutes after eating", "Give thin water quickly", "Force the resident to finish their meal"],
                options_es: ["Alimentar al residente acostado", "Mantener al residente erguido al menos 30 minutos después de comer", "Dar agua ligera rápidamente", "Obligar al residente a terminar su comida"],
                correct: 1,
                reason_en: "Staying upright after meals allows gravity to help food move into the stomach properly.",
                reason_es: "Permanecer erguido después de las comidas permite que la gravedad ayude a que los alimentos se muevan correctamente al estómago."
            },
            // 5. Fundamentals
            {
                text_en: "Which of the following describes 'Negligence'?",
                text_es: "¿Cuál de las siguientes describe 'Negligencia'?",
                options_en: ["Doing the job correctly", "Actions, or failure to act, that result in injury to a resident", "Telling a resident a secret", "Reporting abuse"],
                options_es: ["Hacer el trabajo correctamente", "Acciones, o falta de acción, que resultan en lesiones a un residente", "Contarle un secreto a un residente", "Informar de un maltrato"],
                correct: 1,
                reason_en: "Negligence occurs when a healthcare worker fails to provide the expected standard of care.",
                reason_es: "La negligencia ocurre cuando un trabajador sanitario no proporciona el estándar de cuidado esperado."
            },
            // 6. Mobility
            {
                text_en: "When helping a resident with 'Cane' use, the resident should hold the cane on which side?",
                text_es: "Al ayudar a un residente con el uso del 'Bastón', ¿en qué lado debe sujetarlo el residente?",
                options_en: ["The weak side", "The strong side", "Both sides", "It depends on the time of day"],
                options_es: ["El lado débil", "El lado fuerte", "Ambos lados", "Depende de la hora del día"],
                correct: 1,
                reason_en: "The cane is held on the strong side to provide balance and support for the weak side.",
                reason_es: "El bastón se sujeta en el lado fuerte para proporcionar equilibrio y apoyo al lado débil."
            },
            // 7. Specialized Care
            {
                text_en: "When applying 'Elastic Stockings' (TED Hose), they should be applied:",
                text_es: "Al colocar 'Medias Elásticas' (TED Hose), deben colocarse:",
                options_en: ["Before the resident gets out of bed in the morning", "At bedtime", "Only when the resident is walking", "Over the resident's shoes"],
                options_es: ["Antes de que el residente se levante de la cama por la mañana", "A la hora de dormir", "Sólo cuando el residente está caminando", "Sobre los zapatos del residente"],
                correct: 0,
                reason_en: "Applying them while the resident is flat prevents blood from pooling in the legs.",
                reason_es: "Colocarlas mientras el residente está acostado evita que la sangre se acumule en las piernas."
            },
            // 8. Physical Health
            {
                text_en: "A resident has a 'Pulse' of 115 bpm. This should be reported as:",
                text_es: "Un residente tiene un 'Pulso' de 115 lpm. Esto debe informarse como:",
                options_en: ["Bradycardia", "Tachycardia", "Normal", "Hypotension"],
                options_es: ["Bradicardia", "Taquicardia", "Normal", "Hipotensión"],
                correct: 1,
                reason_en: "Tachycardia is a heart rate over 100 beats per minute.",
                reason_es: "La taquicardia es una frecuencia cardíaca superior a 100 latidos por minuto."
            },
            // 9. Infection Control
            {
                text_en: "When removing PPE, which item is removed FIRST?",
                text_es: "Al quitarse el EPP (PPE), ¿qué elemento se quita PRIMERO?",
                options_en: ["Goggles", "Gown", "Gloves", "Mask"],
                options_es: ["Gafas", "Bata", "Guantes", "Mascarilla"],
                correct: 2,
                reason_en: "Gloves are usually the most contaminated and are removed first to avoid spreading germs.",
                reason_es: "Los guantes suelen ser los más contaminados y se quitan primero para evitar la propagación de gérmenes."
            },
            // 10. Nutrition
            {
                text_en: "A resident on a 'Low Sodium' diet should avoid:",
                text_es: "Un residente con una dieta 'Baja en Sodio' debe evitar:",
                options_en: ["Fresh fruit", "Canned soups and processed meats", "Steamed vegetables", "Whole grain bread"],
                options_es: ["Fruta fresca", "Sopas enlatadas y carnes procesadas", "Verduras al vapor", "Pan integral"],
                correct: 1,
                reason_en: "Processed foods are typically very high in salt/sodium.",
                reason_es: "Los alimentos procesados suelen tener un contenido muy alto de sal/sodio."
            },
            // 11. Personalized Care
            {
                text_en: "What is the best way to prevent 'Foot Drop' in bedbound residents?",
                text_es: "¿Cuál es la mejor forma de prevenir la 'Caída del Pie' (Foot Drop) en residentes encamados?",
                options_en: ["Using a footboard or high-top sneakers", "Keeping the feet flat on the bed", "Using lots of pillows under the knees", "Applying heat to the ankles"],
                options_es: ["Usar un reposapiés (footboard) o zapatillas de caña alta", "Mantener los pies planos sobre la cama", "Usar muchas almohadas debajo de las rodillas", "Aplicar calor en los tobillos"],
                correct: 0,
                reason_en: "A footboard keeps the feet in a natural position (dorsiflexion) to prevent permanent contraction.",
                reason_es: "Un reposapiés mantiene los pies en una posición natural para evitar la contracción permanente."
            },
            // 12. Safety
            {
                text_en: "When transferring a resident from bed to a chair, where should the chair be placed?",
                text_es: "Al trasladar a un residente de la cama a una silla, ¿dónde debe colocarse la silla?",
                options_en: ["On the resident's weak side", "On the resident's strong side", "Directly in front of the bed", "In the doorway"],
                options_es: ["En el lado débil del residente", "En el lado fuerte del residente", "Directamente frente a la cama", "En la puerta"],
                correct: 1,
                reason_en: "Transferring toward the strong side allows the resident to help with the move.",
                reason_es: "El traslado hacia el lado fuerte permite que el residente ayude en el movimiento."
            },
            // 13. Specialized Care
            {
                text_en: "A resident with congestive heart failure (CHF) may need to sleep in which position to breathe easier?",
                text_es: "Un residente con insuficiencia cardíaca congestiva (ICC) puede necesitar dormir en qué posición para respirar mejor?",
                options_en: ["Prone", "Supine", "Fowler's or Orthopneic position", "Left side-lying"],
                options_es: ["Prono", "Supino", "Posición de Fowler u Ortopneica", "Acostado sobre el lado izquierdo"],
                correct: 2,
                reason_en: "Sitting upright helps reduce fluid pressure in the lungs, making breathing easier.",
                reason_es: "Estar sentado erguido ayuda a reducir la presión del líquido en los pulmones, facilitando la respiración."
            },
            // 14. Mental Health
            {
                text_en: "A resident is experiencing a 'Delusion'. This means they:",
                text_es: "Un residente está experimentando un 'Delirio' (Delusion). Esto significa que:",
                options_en: ["See things that aren't there", "Believe things that aren't true despite evidence", "Are very happy", "Are sleeping deeply"],
                options_es: ["Ven cosas que no están ahí", "Creen cosas que no son ciertas a pesar de las pruebas", "Están muy felices", "Están durmiendo profundamente"],
                correct: 1,
                reason_en: "A delusion is a persistent false belief, while a hallucination involves the senses (seeing/hearing).",
                reason_es: "Un delirio es una creencia falsa persistente, mientras que una alucinación afecta a los sentidos (ver/oír)."
            },
            // 15. Specialized Care
            {
                text_en: "When using an 'Incentive Spirometer', the resident should:",
                text_es: "Al usar un 'Espirómetro de Incentivo', el residente debe:",
                options_en: ["Exhale quickly into the device", "Inhale deeply and slowly through the mouthpiece", "Hold their breath for 1 minute", "Blow out through their nose"],
                options_es: ["Exhalar rápidamente en el dispositivo", "Inhalar profunda y lentamente a través de la boquilla", "Contener la respiración durante 1 minuto", "Soplar por la nariz"],
                correct: 1,
                reason_en: "Slow, deep inhalation expands the lungs and prevents pneumonia.",
                reason_es: "La inhalación lenta y profunda expande los pulmones y previene la neumonía."
            },
            // 16. Infection Control
            {
                text_en: "What is 'Asepsis'?",
                text_es: "¿Qué es la 'Asepsia'?",
                options_en: ["The presence of germs", "Being free from disease-producing microbes", "A type of bandage", "A cleaning tool"],
                options_es: ["La presencia de gérmenes", "Estar libre de microbios productores de enfermedades", "Un tipo de vendaje", "Una herramienta de limpieza"],
                correct: 1,
                reason_en: "Medical asepsis techniques (like handwashing) are used to keep an environment clean.",
                reason_es: "Las técnicas de asepsia médica (como el lavado de manos) se utilizan para mantener limpio un entorno."
            },
            // 17. Mobility
            {
                text_en: "Which of the following is an example of an 'Active-Assistive' ROM exercise?",
                text_es: "¿Cuál de los siguientes es un ejemplo de ejercicio ROM 'Activo-Asistido'?",
                options_en: ["The CNA moves all the resident's joints", "The resident moves their own joints without help", "The resident moves their joints with some help from the CNA", "The resident uses a machine"],
                options_es: ["El CNA mueve todas las articulaciones del residente", "El residente mueve sus propias articulaciones sin ayuda", "El residente mueve las articulaciones con algo de ayuda del CNA", "El residente usa una máquina"],
                correct: 2,
                reason_en: "Active-assistive ROM involves the resident participating in the movement with support.",
                reason_es: "El ROM activo-asistido implica que el residente participa en el movimiento con apoyo."
            },
            // 18. Personal Care
            {
                text_en: "When cleaning a resident's glasses, the CNA should use:",
                text_es: "Al limpiar las gafas de un residente, el CNA debe usar:",
                options_en: ["Paper towels and window cleaner", "A soft cloth and water/special cleaner", "Their shirt", "A sponge with soap"],
                options_es: ["Toallas de papel y limpiacristales", "Un paño suave y agua/limpiador especial", "Su camisa", "Una esponja con jabón"],
                correct: 1,
                reason_en: "Paper towels can scratch lenses; a soft cloth prevents damage to expensive eyewear.",
                reason_es: "Las toallas de papel pueden rayar las lentes; un paño suave evita daños en el material."
            },
            // 19. Specialized Care
            {
                text_en: "A resident has a 'Colostomy'. The best time to empty the bag is:",
                text_es: "Un residente tiene una 'Colostomía'. El mejor momento para vaciar la bolsa es:",
                options_en: ["Only once a week", "When it is 1/3 to 1/2 full", "Only when it starts leaking", "When it is completely full to the top"],
                options_es: ["Sólo una vez a la semana", "Cuando esté de 1/3 a 1/2 llena", "Sólo cuando empiece a perder", "Cuando esté completamente llena hasta arriba"],
                correct: 1,
                reason_en: "Emptying the bag before it's full prevents the seal from breaking and protects the skin.",
                reason_es: "Vaciar la bolsa antes de que esté llena evita que el sello se rompa y protege la piel."
            },
            // 20. Nutrition
            {
                text_en: "What should the CNA do if a resident's tray has the wrong diet listed?",
                text_es: "¿Qué debe hacer el CNA si la bandeja de un residente tiene una dieta incorrecta?",
                options_en: ["Let the resident eat it if they want", "Ask the other residents if it looks okay", "Report it to the nurse or dietary department and do not serve it", "Just take the food off that looks wrong"],
                options_es: ["Dejar que el residente coma si quiere", "Preguntar a los otros residentes si parece correcto", "Informar a la enfermera o al departamento de dietas y no servirla", "Quitar sólo la comida que parezca incorrecta"],
                correct: 2,
                reason_en: "Serving the wrong diet (e.g., solid food to a dysphagia resident) is a major safety risk.",
                reason_es: "Servir la dieta incorrecta (ej. comida sólida a un residente con disfagia) es un gran riesgo de seguridad."
            },
            // 21. Physical Health
            {
                text_en: "A resident has a 'DNR' order. This means:",
                text_es: "Un residente tiene una orden 'DNR' (No Reanimar). Esto significa:",
                options_en: ["Do Not Report", "Do Not Resuscitate", "Diet Not Restricted", "Daily Nurse Report"],
                options_es: ["No informar", "No reanimar (Do Not Resuscitate)", "Dieta no restringida", "Informe diario de enfermería"],
                correct: 1,
                reason_en: "DNR means that if the heart or breathing stops, staff should not perform CPR.",
                reason_es: "DNR significa que si el corazón o la respiración se detienen, el personal no debe realizar RCP."
            },
            // 22. Safety
            {
                text_en: "What should the CNA do if they see a frayed electrical cord on a lamp?",
                text_es: "¿Qué debe hacer el CNA si ve un cable eléctrico deshilachado en una lámpara?",
                options_en: ["Tape it with regular tape", "Unplug it and report it/take it out of service", "Ignore it as long as the light works", "Ask the resident to fix it"],
                options_es: ["Pegarlo con cinta adhesiva normal", "Desenchufarlo e informarlo/retirarlo de servicio", "Ignorarlo mientras la luz funcione", "Pedirle al residente que lo arregle"],
                correct: 1,
                reason_en: "Frayed cords are electrical and fire hazards.",
                reason_es: "Los cables deshilachados son peligros eléctricos y de incendio."
            },
            // 23. Infection Control
            {
                text_en: "An 'Autoclave' is used for:",
                text_es: "Un 'Autoclave' se utiliza para:",
                options_en: ["Cleaning floors", "Sterilizing equipment with high-pressure steam", "Keeping food warm", "Sorting laundry"],
                options_es: ["Limpiar suelos", "Esterilizar equipos con vapor a alta presión", "Mantener la comida caliente", "Clasificar la colada"],
                correct: 1,
                reason_en: "Sterilization kills all microorganisms, including spores.",
                reason_es: "La esterilización mata todos los microorganismos, incluidas las esporas."
            },
            // 24. Mobility
            {
                text_en: "When positioning a resident in a 'Lateral' position, pillows should be placed:",
                text_es: "Al colocar a un residente en posición 'Lateral', las almohadas deben colocarse:",
                options_en: ["Only under the head", "Under the head, behind the back, between the knees, and under the top arm", "Under the feet only", "On the floor"],
                options_es: ["Sólo bajo la cabeza", "Bajo la cabeza, detrás de la espalda, entre las rodillas y bajo el brazo superior", "Bajo los pies solamente", "En el suelo"],
                correct: 1,
                reason_en: "Proper pillow placement maintains alignment and prevents pressure on bony prominences.",
                reason_es: "La colocación adecuada de las almohadas mantiene la alineación y evita la presión en las prominencias óseas."
            },
            // 25. Specialized Care
            {
                text_en: "When should the CNA record 'I&O' (Intake and Output)?",
                text_es: "¿Cuándo debe registrar el CNA el 'I&O' (Ingresos y Eliminación)?",
                options_en: ["At the end of the month", "Immediately after the event (e.g., meal finished or urination occurred)", "Once an hour", "Only if the resident is sick"],
                options_es: ["Al final del mes", "Inmediatamente después del evento (ej. comida terminada u orina)", "Una vez por hora", "Sólo si el residente está enfermo"],
                correct: 1,
                reason_en: "Waiting until the end of the shift leads to inaccurate data.",
                reason_es: "Esperar hasta el final del turno conduce a datos inexactos."
            },
            // 26. Fundamentals
            {
                text_en: "What is 'Battery' in a legal sense for a healthcare worker?",
                text_es: "¿Qué es 'Agresión' (Battery) en sentido legal para un trabajador sanitario?",
                options_en: ["An energy source for medical equipment", "Touching a person without their consent", "Threatening to hurt someone", "Forgetting to wash hands"],
                options_es: ["Una fuente de energía", "Tocar a una persona sin su consentimiento", "Amenazar con herir a alguien", "Olvidar lavarse las manos"],
                correct: 1,
                reason_en: "Battery is an intentional act of unauthorized physical contact.",
                reason_es: "Agresión (Battery) es un acto intencionado de contacto físico no autorizado."
            },
            // 27. Personal Care
            {
                text_en: "When giving a 'Complete Bed Bath', which area should be washed LAST?",
                text_es: "Al dar un 'Baño de Cama Completo', ¿qué zona debe lavarse al FINAL?",
                options_en: ["Face", "Arms", "Perineal area", "Feet"],
                options_es: ["Cara", "Brazos", "Zona perineal", "Pies"],
                correct: 2,
                reason_en: "Washing from cleanest to dirtiest areas prevents the spread of germs.",
                reason_es: "Lavar de las zonas más limpias a las más sucias evita la propagación de gérmenes."
            },
            // 28. Specialized Care
            {
                text_en: "A resident has a 'Sputum' sample ordered. Sputum is:",
                text_es: "Un residente tiene pedida una muestra de 'Esputo'. El esputo es:",
                options_en: ["Saliva from the mouth", "Mucus coughed up from the lungs", "Vomit", "Urine"],
                options_es: ["Saliva de la boca", "Moco tosido desde los pulmones", "Vómito", "Orina"],
                correct: 1,
                reason_en: "A sputum sample must come from deep in the chest, not just saliva.",
                reason_es: "Una muestra de esputo debe venir de lo profundo del pecho, no ser sólo saliva."
            },
            // 29. Mental Health
            {
                text_en: "A resident is anxious. The CNA can help by:",
                text_es: "Un residente tiene ansiedad. El CNA puede ayudar:",
                options_en: ["Talking very fast", "Providing a quiet environment and listening with empathy", "Telling them to stop worrying", "Leaving them alone for hours"],
                options_es: ["Hablando muy rápido", "Proporcionando un entorno tranquilo y escuchando con empatía", "Diciéndoles que dejen de preocuparse", "Dejándolos solos durante horas"],
                correct: 1,
                reason_en: "Calmness and presence help reduce anxiety levels.",
                reason_es: "La calma y la presencia ayudan a reducir los niveles de ansiedad."
            },
            // 30. Safety
            {
                text_en: "What is the FIRST thing you should do if a resident is choking and cannot speak or breathe?",
                text_es: "¿Qué es lo PRIMERO que debe hacer si un residente se asfixia y no puede hablar ni respirar?",
                options_en: ["Call for help and start abdominal thrusts (Heimlich maneuver)", "Give them a glass of water", "Ask them to lie down", "Slap them on the back"],
                options_es: ["Llamar para pedir ayuda e iniciar compresiones abdominales (Heimlich)", "Darles un vaso de agua", "Pedirles que se acuesten", "Darles palmadas en la espalda"],
                correct: 0,
                reason_en: "Abdominal thrusts are the emergency protocol for severe airway obstruction.",
                reason_es: "Las compresiones abdominales son el protocolo de emergencia para una obstrucción grave de las vías respiratorias."
            },
            // 31. Ethical/Legal
            {
                text_en: "Which of the following is an example of 'Assault'?",
                text_es: "¿Cuál de las siguientes es un ejemplo de 'Agresión' (Assault)?",
                options_en: ["Hitting a resident", "Threatening to hit a resident", "Taking a resident's photo without permission", "Forgetting to give a resident water"],
                options_es: ["Golpear a un residente", "Amenazar con golpear a un residente", "Tomar una foto de un residente sin permiso", "Olvidar dar agua a un residente"],
                correct: 1,
                reason_en: "Assault is the threat of harm, while battery is the actual physical contact.",
                reason_es: "Assault es la amenaza de daño, mientras que battery es el contacto físico real."
            },
            // 32. Communication
            {
                text_en: "When a resident is hard of hearing, the CNA should:",
                text_es: "Cuando un residente tiene problemas de audición, el CNA debe:",
                options_en: ["Shout as loudly as possible", "Speak clearly and face the resident directly", "Avoid talking to them", "Only use written notes"],
                options_es: ["Gritar lo más fuerte posible", "Hablar con claridad y de frente al residente", "Evitar hablar con ellos", "Usar sólo notas escritas"],
                correct: 1,
                reason_en: "Facing the resident allows them to see your lips and facial expressions for better understanding.",
                reason_es: "Estar frente al residente les permite ver tus labios y expresiones faciales para una mejor comprensión."
            },
            // 33. Resident Rights
            {
                text_en: "A resident's mail should be:",
                text_es: "El correo de un residente debe ser:",
                options_en: ["Opened by the CNA to check for safety", "Opened only by the resident or their legal representative", "Thrown away if it looks like junk", "Read aloud to the other residents"],
                options_es: ["Abierto por el CNA para comprobar la seguridad", "Abierto sólo por el residente o su representante legal", "Tirado si parece publicidad", "Leído en voz alta a los otros residentes"],
                correct: 1,
                reason_en: "Privacy of mail is a protected resident right.",
                reason_es: "La privacidad del correo es un derecho protegido del residente."
            },
            // 34. Specialized Care
            {
                text_en: "When providing 'Catheter Care', the CNA should clean the tubing:",
                text_es: "Al realizar el 'Cuidado de la Sonda', el CNA debe limpiar el tubo:",
                options_en: ["Toward the resident's body", "Away from the resident's body (at least 4 inches)", "In a back-and-forth motion", "Only with cold water"],
                options_es: ["Hacia el cuerpo del residente", "Alejándose del cuerpo del residente (al menos 4 pulgadas)", "En movimiento de vaivén", "Sólo con agua fría"],
                correct: 1,
                reason_en: "Cleaning away from the body prevents moving bacteria toward the urinary tract.",
                reason_es: "Limpiar alejándose del cuerpo evita mover bacterias hacia el tracto urinario."
            },
            // 35. Infection Control
            {
                text_en: "What is the difference between 'Disinfection' and 'Sterilization'?",
                text_es: "¿Cuál es la diferencia entre 'Desinfección' y 'Esterilización'?",
                options_en: ["They are exactly the same", "Disinfection kills some germs; sterilization kills all germs including spores", "Sterilization only uses soap", "Disinfection is for hands; sterilization is for floors"],
                options_es: ["Son exactamente lo mismo", "La desinfección mata algunos gérmenes; la esterilización mata todos los gérmenes, incluidas las esporas", "La esterilización sólo usa jabón", "La desinfección es para las manos; la esterilización es para los suelos"],
                correct: 1,
                reason_en: "Sterilization is the highest level of microbial control.",
                reason_es: "La esterilización es el nivel más alto de control microbiano."
            },
            // 36. Safety
            {
                text_en: "What should you do if you find a resident on the floor having a seizure?",
                text_es: "¿Qué debe hacer si encuentra a un residente en el suelo teniendo una convulsión?",
                options_en: ["Move them to the bed", "Put a pillow under their head and move nearby furniture", "Hold them down so they don't move", "Stick a tongue depressor in their mouth"],
                options_es: ["Moverlos a la cama", "Poner una almohada bajo su cabeza y apartar los muebles cercanos", "Sujetarlos para que no se muevan", "Meter un depresor lingual en su boca"],
                correct: 1,
                reason_en: "The priority during a seizure is to protect the resident from injury, not to stop the movement.",
                reason_es: "La prioridad durante una convulsión es proteger al residente de lesiones, no detener su movimiento."
            },
            // 37. Personal Care
            {
                text_en: "When dressing a resident with a 'Weak' arm, the CNA should start by:",
                text_es: "Al vestir a un residente con un brazo 'Débil', el CNA debe empezar por:",
                options_en: ["Dressing the weak side first", "Dressing the strong side first", "It doesn't matter", "Removing all clothes first"],
                options_es: ["Vestir primero el lado débil", "Vestir primero el lado fuerte", "No importa", "Quitar toda la ropa primero"],
                correct: 0,
                reason_en: "Dress Affected Weak (DAW) for dressing; Undress Strong First (USF) for undressing.",
                reason_es: "Se viste primero el lado afectado débil (DAW); se desviste primero el lado fuerte (USF)."
            },
            // 38. Mobility
            {
                text_en: "A 'Pivot' transfer is used for residents who can:",
                text_es: "Un traslado de 'Pivote' se utiliza para residentes que pueden:",
                options_en: ["Not stand at all", "Bear some weight on their legs", "Walk long distances", "Run"],
                options_es: ["No mantenerse en pie en absoluto", "Soportar algo de peso en sus piernas", "Caminar largas distancias", "Correr"],
                correct: 1,
                reason_en: "Pivot transfers require the resident to be able to stand, even if they are weak.",
                reason_es: "Los traslados de pivote requieren que el residente pueda ponerse de pie, aunque esté débil."
            },
            // 39. Specialized Care
            {
                text_en: "When a resident is on 'Bedrest', what is a major risk?",
                text_es: "Cuando un residente está en 'Reposo en Cama', ¿cuál es un riesgo importante?",
                options_en: ["Excessive energy", "Blood clots (Deep Vein Thrombosis)", "Too much appetite", "Fast hair growth"],
                options_es: ["Exceso de energía", "Coágulos de sangre (Trombosis Venosa Profunda)", "Demasiado apetito", "Crecimiento rápido del cabello"],
                correct: 1,
                reason_en: "Immobility slows circulation and increases the risk of blood clots.",
                reason_es: "La inmovilidad ralentiza la circulación y aumenta el riesgo de coágulos de sangre."
            },
            // 40. Physical Health
            {
                text_en: "What is 'Orthostatic Hypotension'?",
                text_es: "¿Qué es la 'Hipotensión Ortostática'?",
                options_en: ["High blood pressure while sleeping", "A sudden drop in blood pressure when standing up", "A normal pulse rate", "A headache"],
                options_es: ["Presión arterial alta al dormir", "Una caída repentina de la presión arterial al ponerse de pie", "Un pulso normal", "Un dolor de cabeza"],
                correct: 1,
                reason_en: "This is why residents should 'dangle' for a few minutes before standing.",
                reason_es: "Por esto los residentes deben hacer 'dangle' unos minutos antes de ponerse de pie."
            },
            // 41. Hygiene
            {
                text_en: "When providing 'Perineal Care' for a male resident, the CNA should first:",
                text_es: "Al realizar el 'Cuidado Perineal' de un residente masculino, el CNA debe primero:",
                options_en: ["Wash the scrotum", "Wash the tip of the penis using a circular motion", "Wash the rectal area", "Dry the legs"],
                options_es: ["Lavar el escroto", "Lavar la punta del pene con un movimiento circular", "Lavar la zona rectal", "Secar las piernas"],
                correct: 1,
                reason_en: "The tip of the penis is the cleanest area and should be washed before moving downward.",
                reason_es: "La punta del pene es la zona más limpia y debe lavarse antes de bajar."
            },
            // 42. Safety
            {
                text_en: "A resident is using 'Oxygen'. Which of the following is NOT allowed in the room?",
                text_es: "Un residente está usando 'Oxígeno'. ¿Cuál de los siguientes NO está permitido en la habitación?",
                options_en: ["Vase", "Electric razor", "Hand sanitizer", "Water bottle"],
                options_es: ["Jarrón", "Maquinilla de afeitar eléctrica", "Desinfectante de manos", "Botella de agua"],
                correct: 1,
                reason_en: "Electric razors can produce sparks, which are dangerous in an oxygen-rich environment.",
                reason_es: "Las máquinas de afeitar eléctricas pueden producir chispas, peligrosas en un entorno rico en oxígeno."
            },
            // 43. Infection Control
            {
                text_en: "How should you carry clean linens to a resident's room?",
                text_es: "¿Cómo debe llevar la ropa de cama limpia a la habitación de un residente?",
                options_en: ["Against your uniform to keep them stable", "Away from your uniform", "On top of your head", "In a trash bag"],
                options_es: ["Contra su uniforme para mantenerlos estables", "Alejados de su uniforme", "Sobre su cabeza", "En una bolsa de basura"],
                correct: 1,
                reason_en: "Keeping linens away from your uniform prevents contamination from your clothing.",
                reason_es: "Mantener la ropa alejada de su uniforme evita la contaminación desde su ropa."
            },
            // 44. Specialized Care
            {
                text_en: "What should the CNA record FIRST after a resident has shared a life experience with them?",
                text_es: "¿Qué debe registrar PRIMERO el CNA después de que un residente haya compartido una experiencia de vida con ellos?",
                options_en: ["The details of the story", "Nothing, as it is personal", "Any changes in the resident's mood or behavior that resulted from the conversation", "The resident's secrets"],
                options_es: ["Los detalles de la historia", "Nada, ya que es personal", "Cualquier cambio en el estado de ánimo o comportamiento que resulte de la charla", "Los secretos del residente"],
                correct: 2,
                reason_en: "Monitoring emotional health is part of the CNA's duties.",
                reason_es: "Controlar la salud emocional es parte de los deberes del CNA."
            },
            // 45. Fundamentals
            {
                text_en: "A resident has 'Pica'. This means they:",
                text_es: "Un residente tiene 'Pica'. Esto significa que:",
                options_en: ["Eat very quickly", "Eat non-food items like dirt or paper", "Are not hungry", "Only eat fruit"],
                options_es: ["Comen muy rápido", "Comen cosas que no son alimentos como tierra o papel", "No tienen hambre", "Sólo comen fruta"],
                correct: 1,
                reason_en: "Pica can be a sign of nutritional deficiencies or mental health issues.",
                reason_es: "La pica puede ser un signo de deficiencias nutricionales o problemas de salud mental."
            },
            // 46. Personal Care
            {
                text_en: "When giving a 'Back Rub' to a resident, the CNA should use:",
                text_es: "Al dar un 'Masaje de Espalda' (Back Rub) a un residente, el CNA debe usar:",
                options_en: ["Friction and fast movements", "Long, smooth strokes (effleurage)", "Intense pressure", "Tickling"],
                options_es: ["Fricción y movimientos rápidos", "Pasadas largas y suaves (effleurage)", "Presión intensa", "Cosquillas"],
                correct: 1,
                reason_en: "Smooth strokes promote relaxation and improve circulation without damaging the skin.",
                reason_es: "Las pasadas suaves fomentan la relajación y mejoran la circulación sin dañar la piel."
            },
            // 47. Mental Health
            {
                text_en: "A resident with Alzheimer's is 'Eloping'. This means they are:",
                text_es: "Un residente con Alzheimer se está 'Fugando' (Eloping). Esto significa que:",
                options_en: ["Getting married", "Leaving the facility without supervision", "Sleeping a lot", "Eating too much"],
                options_es: ["Casándose", "Saliendo del centro sin supervisión", "Durmiendo mucho", "Comiendo demasiado"],
                correct: 1,
                reason_en: "Elopement is a major safety risk in dementia care units.",
                reason_es: "La fuga es un gran riesgo de seguridad en las unidades de cuidado de demencia."
            },
            // 48. Specialized Care
            {
                text_en: "When assisting with a 'Bedpan', the CNA should always wear:",
                text_es: "Al ayudar con un 'Orinal de Cama' (Bedpan), el CNA debe llevar siempre:",
                options_en: ["A mask", "Gloves", "A gown", "Safety goggles"],
                options_es: ["Mascarilla", "Guantes", "Bata", "Gafas de seguridad"],
                correct: 1,
                reason_en: "Gloves protect against contact with body fluids.",
                reason_es: "Los guantes protegen contra el contacto con fluidos corporales."
            },
            // 49. Hygiene
            {
                text_en: "How many times a day should 'Oral Care' be provided to most residents?",
                text_es: "¿Cuántas veces al día se debe realizar el 'Cuidado Bucal' a la mayoría de los residentes?",
                options_en: ["Once a week", "At least twice a day", "Only when they request it", "Every hour"],
                options_es: ["Una vez por semana", "Al menos dos veces al día", "Sólo cuando lo pidan", "Cada hora"],
                correct: 1,
                reason_en: "Morning and evening care is the standard for good hygiene.",
                reason_es: "El cuidado por la mañana y por la noche es el estándar para una buena higiene."
            },
            // 50. Safety
            {
                text_en: "What should you do if you find a resident's room on fire?",
                text_es: "¿Qué debe hacer si encuentra la habitación de un residente en llamas?",
                options_en: ["Call the front desk", "Remove the resident from the room immediately (Rescue)", "Fetch a bucket of water", "Open all the windows"],
                options_es: ["Llamar a recepción", "Retirar al residente de la habitación inmediatamente (Rescue)", "Traer un cubo de agua", "Abrir todas las ventanas"],
                correct: 1,
                reason_en: "Rescue is the 'R' in RACE and is the first priority.",
                reason_es: "El rescate (Rescue) es la 'R' de RACE y es la primera prioridad."
            },
            // 51. Physical Health
            {
                text_en: "Which site is most commonly used to measure a resident's 'Pulse'?",
                text_es: "¿Qué zona se usa más habitualmente para medir el 'Pulso' de un residente?",
                options_en: ["Carotid (neck)", "Radial (wrist)", "Apical (heart)", "Brachial (elbow)"],
                options_es: ["Carotídeo (cuello)", "Radial (muñeca)", "Apical (corazón)", "Braquial (codo)"],
                correct: 1,
                reason_en: "The radial pulse is easily accessible and used for most routine checks.",
                reason_es: "El pulso radial es de fácil acceso y se usa para la mayoría de los controles rutinarios."
            },
            // 52. Specialized Care
            {
                text_en: "When a resident is on a 'Mechanical Soft' diet, the food is:",
                text_es: "Cuando un residente tiene una dieta 'Blanda Mecánica', la comida está:",
                options_en: ["Liquid", "Chopped or ground to make chewing easier", "Completely flat", "Spicy"],
                options_es: ["Líquida", "Picada o molida para facilitar la masticación", "Completamente plana", "Picante"],
                correct: 1,
                reason_en: "Mechanical soft is used for residents with dental issues but who can still swallow safely.",
                reason_es: "La blanda mecánica se usa para residentes con problemas dentales pero que pueden tragar con seguridad."
            },
            // 53. Fundamentals
            {
                text_en: "A resident is telling you about being hit by another CNA. You should:",
                text_es: "Un residente le cuenta que fue golpeado por otro CNA. Usted debe:",
                options_en: ["Protect your coworker and stay quiet", "Report it to the nurse or supervisor immediately", "Wait to see if it happens again", "Tell the resident not to lie"],
                options_es: ["Proteger a su compañero y callar", "Informar a la enfermera o supervisor inmediatamente", "Esperar a ver si vuelve a pasar", "Decirle al residente que no mienta"],
                correct: 1,
                reason_en: "CNAs have a legal and ethical duty to report any allegation of abuse.",
                reason_es: "Los CNA tienen el deber legal y ético de informar cualquier acusación de abuso."
            },
            // 54. Personal Care
            {
                text_en: "When brushing a resident's hair, the CNA should start from:",
                text_es: "Al cepillar el cabello de un residente, el CNA debe empezar desde:",
                options_en: ["The roots down to the ends", "The ends up toward the scalp (if tangled)", "The middle", "The back only"],
                options_es: ["La raíz hacia las puntas", "Las puntas hacia el cuero cabelludo (si está enredado)", "El medio", "Sólo la parte de atrás"],
                correct: 1,
                reason_en: "Brushing from the ends upward prevents pain and hair breakage when tangles are present.",
                reason_es: "Cepillar desde las puntas hacia arriba evita el dolor y la rotura del cabello cuando hay enredos."
            },
            // 55. Infection Control
            {
                text_en: "What should the CNA do after removing their gloves?",
                text_es: "¿Qué debe hacer el CNA después de quitarse los guantes?",
                options_en: ["Put on new gloves", "Wash their hands immediately", "Eat their lunch", "Leave the room"],
                options_es: ["Ponerse guantes nuevos", "Lavarse las manos inmediatamente", "Comer su almuerzo", "Salir de la habitación"],
                correct: 1,
                reason_en: "Gloves may have microscopic holes or become contaminated during removal.",
                reason_es: "Los guantes pueden tener agujeros microscópicos o contaminarse al quitarlos."
            },
            // 56. Mental Health
            {
                text_en: "A resident is hoarding food in their room. The CNA should:",
                text_es: "Un residente está acumulando comida en su habitación. El CNA debe:",
                options_en: ["Yell at them for being messy", "Report it to the nurse because it attract pests and bacteria", "Throw it all away while the resident is at dinner", "Ignore it"],
                options_es: ["Gritarles por ser desordenados", "Informar a la enfermera porque atrae plagas y bacterias", "Tirarlo todo mientras el residente cena", "Ignorarlo"],
                correct: 1,
                reason_en: "Hoarding food is a safety and health hazard that needs professional assessment.",
                reason_es: "Acumular comida es un peligro para la seguridad y la salud que requiere evaluación profesional."
            },
            // 57. Physical Health
            {
                text_en: "Which of the following describes a 'Normal' respiratory rate for an adult?",
                text_es: "¿Cuál de las siguientes describe una frecuencia respiratoria 'Normal' para un adulto?",
                options_en: ["5-10 breaths per minute", "12-20 breaths per minute", "30-40 breaths per minute", "60-80 breaths per minute"],
                options_es: ["5-10 respiraciones por minuto", "12-20 respiraciones por minuto", "30-40 respiraciones por minuto", "60-80 respiraciones por minuto"],
                correct: 1,
                reason_en: "12-20 bpm is the typical resting range for a healthy adult.",
                reason_es: "12-20 rpm es el rango normal en reposo para un adulto sano."
            },
            // 58. Specialized Care
            {
                text_en: "When measuring a resident's weight, the CNA should ensure:",
                text_es: "Al medir el peso de un residente, el CNA debe asegurarse de que:",
                options_en: ["The scale is balanced at zero before the resident steps on", "The resident is wearing heavy shoes", "The resident has just finished a large meal", "The scale is in a dark room"],
                options_es: ["La báscula esté equilibrada en cero antes de que el residente suba", "El residente lleve zapatos pesados", "El residente acabe de terminar una comida copiosa", "La báscula esté en una habitación oscura"],
                correct: 0,
                reason_en: "Balancing the scale ensures an accurate and reliable measurement.",
                reason_es: "Equilibrar la báscula garantiza una medición exacta y fiable."
            },
            // 59. Fundamentals
            {
                text_en: "What is 'Slander'?",
                text_es: "¿Qué es la 'Calumnia' (Slander)?",
                options_en: ["Written defamation", "Spoken defamation", "A type of bandage", "A legal contract"],
                options_es: ["Difamación escrita", "Difamación hablada", "Un tipo de vendaje", "Un contrato legal"],
                correct: 1,
                reason_en: "Slander is making false spoken statements that damage a person's reputation.",
                reason_es: "Slander es hacer declaraciones falsas habladas que dañan la reputación de una persona."
            },
            // 60. Infection Control
            {
                text_en: "A resident is coughing. The best way to prevent the spread of germs is to have them:",
                text_es: "Un residente está tosiendo. La mejor forma de prevenir la propagación de gérmenes es que ellos:",
                options_en: ["Cough into their hands", "Cough into their elbow or a tissue", "Cough toward other people", "Not breathe"],
                options_es: ["Tosan en sus manos", "Tosan en su codo o en un pañuelo", "Tosan de frente a otras personas", "No respiren"],
                correct: 1,
                reason_en: "Coughing into the elbow prevents hand contamination.",
                text_es: "Toser en el codo evita la contaminación de las manos."
            }
        ]
    },
    {
        name: "Simulacro Mixto 3",
        questions: [
            // 1. Cardiovascular
            {
                text_en: "What is a common sign of 'Left-Sided' heart failure?",
                text_es: "¿Cuál es un signo común de insuficiencia cardíaca del lado 'Izquierdo'?",
                options_en: ["Swelling in the ankles", "Shortness of breath and coughing (pulmonary edema)", "Weight loss", "Increased appetite"],
                options_es: ["Hinchazón en los tobillos", "Dificultad para respirar y tos (edema pulmonar)", "Pérdida de peso", "Aumento del apetito"],
                correct: 1,
                reason_en: "Left-sided failure causes blood to back up into the lungs, leading to respiratory issues.",
                reason_es: "La insuficiencia del lado izquierdo hace que la sangre retroceda hacia los pulmones, provocando problemas respiratorios."
            },
            {
                text_en: "Which blood pressure reading is considered 'Hypertension'?",
                text_es: "¿Qué lectura de presión arterial se considera 'Hipertensión'?",
                options_en: ["110/70 mmHg", "120/80 mmHg", "140/90 mmHg or higher", "90/60 mmHg"],
                options_es: ["110/70 mmHg", "120/80 mmHg", "140/90 mmHg o más", "90/60 mmHg"],
                correct: 2,
                reason_en: "Consistent readings above 140/90 are generally classified as stage 2 hypertension.",
                reason_es: "Las lecturas constantes por encima de 140/90 se clasifican generalmente como hipertensión de etapa 2."
            },
            {
                text_en: "A 'Myocardial Infarction' (MI) occurs when:",
                text_es: "Un 'Infarto de Miocardio' (IM) ocurre cuando:",
                options_en: ["The heart stops beating", "Blood flow to the heart muscle is blocked, causing tissue death", "The heart beats too fast", "The heart is enlarged"],
                options_es: ["El corazón deja de latir", "El flujo sanguíneo al músculo cardíaco se bloquea, causando muerte del tejido", "El corazón late muy rápido", "El corazón está agrandado"],
                correct: 1,
                reason_en: "An MI is a medical emergency that requires immediate intervention.",
                reason_es: "Un IM es una emergencia médica que requiere intervención inmediata."
            },
            {
                text_en: "Angina pectoris is often described by residents as:",
                text_es: "La angina de pecho suele ser descrita por los residentes como:",
                options_en: ["Sharp, stabbing pain", "Tightness, pressure, or squeezing in the chest", "Itching in the chest", "Abdominal cramps"],
                options_es: ["Dolor agudo y punzante", "Opresión, presión o estrujamiento en el pecho", "Picazón en el pecho", "Calambres abdominales"],
                correct: 1,
                reason_en: "Angina happens when the heart muscle doesn't get enough oxygen-rich blood.",
                reason_es: "La angina ocurre cuando el músculo cardíaco no recibe suficiente sangre rica en oxígeno."
            },
            {
                text_en: "Residents with 'Peripheral Vascular Disease' (PVD) often have:",
                text_es: "Los residentes con 'Enfermedad Vascular Periférica' (EVP) suelen tener:",
                options_en: ["Cold feet and poor circulation in the legs", "Warm, pink skin", "Excellent pulses", "Fast hair growth"],
                options_es: ["Pies fríos y mala circulación en las piernas", "Piel cálida y rosada", "Pulsos excelentes", "Crecimiento rápido del vello"],
                correct: 0,
                reason_en: "PVD restricts blood flow to the extremities, leading to coldness and potential ulcers.",
                reason_es: "La EVP restringe el flujo sanguíneo a las extremidades, provocando frío y posibles úlceras."
            },
            {
                text_en: "An 'Aneurysm' is defined as:",
                text_es: "Un 'Aneurisma' se define como:",
                options_en: ["A narrowed artery", "A weak spot or bulge in the wall of an artery", "A heart valve problem", "A type of heart surgery"],
                options_es: ["Una arteria estrechada", "Un punto débil o bulto en la pared de una arteria", "Un problema de válvula cardíaca", "Un tipo de cirugía cardíaca"],
                correct: 1,
                reason_en: "Aneurysms can be life-threatening if they rupture and cause internal bleeding.",
                reason_es: "Los aneurismas pueden ser mortales si se rompen y causan una hemorragia interna."
            },
            {
                text_en: "The 'Apical' pulse is measured at which location?",
                text_es: "El pulso 'Apical' se mide en ¿qué lugar?",
                options_en: ["The wrist", "The neck", "The left side of the chest, just below the nipple", "The groin"],
                options_es: ["La muñeca", "El cuello", "El lado izquierdo del pecho, justo debajo del pezón", "La ingle"],
                correct: 2,
                reason_en: "Measuring the apical pulse requires a stethoscope and is done for a full minute.",
                reason_es: "Medir el pulso apical requiere un estetoscopio y se hace durante un minuto completo."
            },
            {
                text_en: "What is a 'Normal' resting pulse rate for an adult?",
                text_es: "¿Cuál es un ritmo de pulso en reposo 'Normal' para un adulto?",
                options_en: ["40-50 bpm", "60-100 bpm", "110-130 bpm", "140-160 bpm"],
                options_es: ["40-50 lpm", "60-100 lpm", "110-130 lpm", "140-160 lpm"],
                correct: 1,
                reason_en: "60-100 beats per minute is the standard range for healthy adults at rest.",
                reason_es: "60-100 latidos por minuto es el rango estándar para adultos sanos en reposo."
            },
            {
                text_en: "Edema (swelling) in the feet and ankles is a common sign of:",
                text_es: "El edema (hinchazón) en pies y tobillos es un signo común de:",
                options_en: ["Dehydration", "Right-sided heart failure", "A broken toe", "Vitamin deficiency"],
                options_es: ["Deshidratación", "Insuficiencia cardíaca del lado derecho", "Un dedo roto", "Deficiencia de vitaminas"],
                correct: 1,
                reason_en: "In right-sided failure, the heart cannot pump blood efficiently, causing fluid backup in the body.",
                reason_es: "En la insuficiencia derecha, el corazón no bombea sangre de forma eficaz, causando acumulación de líquido."
            },
            {
                text_en: "Orthostatic hypotension is most dangerous when the resident is:",
                text_es: "La hipotensión ortostática es más peligrosa cuando el residente está:",
                options_en: ["Sleeping", "Standing up quickly from a sitting or lying position", "Eating", "Watching TV"],
                options_es: ["Durmiendo", "Poniéndose de pie rápidamente desde una posición sentada o acostada", "Comiendo", "Viendo la tele"],
                correct: 1,
                reason_en: "The sudden drop in blood pressure can cause dizziness and falls.",
                reason_es: "La caída repentina de la presión arterial puede causar mareos y caídas."
            },
            // 11. Respiratory
            {
                text_en: "What does COPD stand for?",
                text_es: "¿Qué significan las siglas EPOC (COPD en inglés)?",
                options_en: ["Chronic Obstructive Pulmonary Disease", "Contagious Oral Pulmonary Disease", "Common Obstruction of Peripheral Ducts", "Critical Oxygen Pressure Disorder"],
                options_es: ["Enfermedad Pulmonar Obstructiva Crónica", "Enfermedad Pulmonar Oral Contagiosa", "Obstrucción Común de Conductos Periféricos", "Trastorno de Presión de Oxígeno Crítica"],
                correct: 0,
                reason_en: "COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs.",
                reason_es: "La EPOC es una enfermedad pulmonar inflamatoria crónica que obstruye el flujo de aire desde los pulmones."
            },
            {
                text_en: "A resident with 'Emphysema' has damage to which part of the lungs?",
                text_es: "Un residente con 'Enfisema' tiene daño en ¿qué parte de los pulmones?",
                options_en: ["The trachea", "The alveoli (air sacs)", "The ribs", "The diaphragm"],
                options_es: ["La tráquea", "Los alvéolos (sacos de aire)", "Las costillas", "El diafragma"],
                correct: 1,
                reason_en: "Damage to the alveoli reduces the surface area available for oxygen exchange.",
                reason_es: "El daño a los alvéolos reduce la superficie disponible para el intercambio de oxígeno."
            },
            {
                text_en: "Chronic Bronchitis is characterized by:",
                text_es: "La Bronquitis Crónica se caracteriza por:",
                options_en: ["A persistent cough and mucus production", "Clear lungs", "Weight loss", "Fast running speed"],
                options_es: ["Tos persistente y producción de moco", "Pulmones limpios", "Pérdida de peso", "Velocidad de carrera rápida"],
                correct: 0,
                reason_en: "Inflammation of the bronchial tubes leads to coughing and breathing difficulties.",
                reason_es: "La inflamación de los bronquios provoca tos y dificultades respiratorias."
            },
            {
                text_en: "What happens during an 'Asthma' attack?",
                text_es: "¿Qué ocurre durante un ataque de 'Asma'?",
                options_en: ["Airways narrow and produce extra mucus, making it hard to breathe", "Heart stops", "Blood pressure drops", "Temperature rises"],
                options_es: ["Las vías respiratorias se estrechan y producen moco extra, dificultando la respiración", "El corazón se detiene", "Baja la presión arterial", "Sube la temperatura"],
                correct: 0,
                reason_en: "Asthma is a condition where your airways narrow and swell and may produce extra mucus.",
                reason_es: "El asma es una afección en la que sus vías respiratorias se estrechan, se hinchan y pueden producir moco extra."
            },
            {
                text_en: "Tuberculosis (TB) primarily affects which organ?",
                text_es: "La Tuberculosis (TB) afecta principalmente a ¿qué órgano?",
                options_en: ["Liver", "Lungs", "Brain", "Stomach"],
                options_es: ["Hígado", "Pulmones", "Cerebro", "Estómago"],
                correct: 1,
                reason_en: "TB is a bacterial infection that can also spread to other parts of the body.",
                reason_es: "La TB es una infección bacteriana que también puede propagarse a otras partes del cuerpo."
            },
            {
                text_en: "Pneumonia is an infection that inflames the air sacs in:",
                text_es: "La Neumonía es una infección que inflama los sacos de aire en:",
                options_en: ["One or both lungs", "The throat", "The nose", "The heart"],
                options_es: ["Uno o ambos pulmones", "La garganta", "La nariz", "El corazón"],
                correct: 0,
                reason_en: "The air sacs may fill with fluid or pus, causing cough with phlegm, fever, and chills.",
                reason_es: "Los sacos de aire pueden llenarse con líquido o pus, causando tos con flema, fiebre y escalofríos."
            },
            {
                text_en: "When a resident is on oxygen, the CNA should ensure that oxygen tubing is:",
                text_es: "Cuando un residente está con oxígeno, el CNA debe asegurarse de que el tubo de oxígeno esté:",
                options_en: ["Tight around the neck", "Kink-free and positioned correctly", "Under the bedsheets", "Hidden"],
                options_es: ["Apretado al cuello", "Sin dobleces y colocado correctamente", "Bajo las sábanas", "Oculto"],
                correct: 1,
                reason_en: "Kinks in the tubing can stop the flow of oxygen to the resident.",
                reason_es: "Los dobleces en el tubo pueden detener el flujo de oxígeno al residente."
            },
            {
                text_en: "Pursed-lip breathing is a technique used to:",
                text_es: "La respiración con labios fruncidos es una técnica usada para:",
                options_en: ["Eat faster", "Help control shortness of breath", "Sing louder", "Stop hiccuping"],
                options_es: ["Comer más rápido", "Ayudar a controlar la falta de aire", "Cantar más fuerte", "Detener el hipo"],
                correct: 1,
                reason_en: "It helps slow down breathing and keeps the airways open longer.",
                reason_es: "Ayuda a ralentizar la respiración y mantiene las vías respiratorias abiertas más tiempo."
            },
            {
                text_en: "A 'Pulse Oximeter' measures:",
                text_es: "Un 'Pulsioxímetro' mide:",
                options_en: ["Blood pressure", "Oxygen saturation in the blood", "Body weight", "Glucose levels"],
                options_es: ["Presión arterial", "Saturación de oxígeno en la sangre", "Peso corporal", "Niveles de glucosa"],
                correct: 1,
                reason_en: "A normal reading is typically between 95% and 100%.",
                reason_es: "Una lectura normal suele estar entre el 95% y el 100%."
            },
            {
                text_en: "What is 'Aspiration' in a respiratory context?",
                text_es: "¿Qué es la 'Aspiración' en un contexto respiratorio?",
                options_en: ["A goal for the future", "Inhaling food, fluid, or vomit into the lungs", "Deep breathing", "Holding your breath"],
                options_es: ["Una meta para el futuro", "Inhalar comida, líquido o vómito hacia los pulmones", "Respiración profunda", "Contener la respiración"],
                correct: 1,
                reason_en: "Aspiration can lead to serious lung infections like aspiration pneumonia.",
                reason_es: "La aspiración puede provocar infecciones pulmonares graves como la neumonía por aspiración."
            },
            // 21. Endocrine
            {
                text_en: "Type 1 Diabetes is characterized by:",
                text_es: "La Diabetes Tipo 1 se caracteriza por:",
                options_en: ["The body not producing any insulin", "Eating too much sugar", "Being overweight", "Only occurring in old age"],
                options_es: ["El cuerpo no produce nada de insulina", "Comer demasiado azúcar", "Tener sobrepeso", "Solo ocurrir en la vejez"],
                correct: 0,
                reason_en: "Type 1 is an autoimmune condition often diagnosed in childhood or young adulthood.",
                reason_es: "El Tipo 1 es una afección autoinmune diagnosticada a menudo en la infancia o juventud."
            },
            {
                text_en: "Which of the following describes Hypoglycemia?",
                text_es: "¿Cuál de los siguientes describe la Hipoglucemia?",
                options_en: ["High blood sugar", "Low blood sugar", "Normal blood pressure", "Low body temperature"],
                options_es: ["Azúcar alta en sangre", "Azúcar baja en sangre", "Presión arterial normal", "Baja temperatura corporal"],
                correct: 1,
                reason_en: "Hypoglycemia can cause shaking, sweating, and confusion.",
                reason_es: "La hipoglucemia puede causar temblores, sudoración y confusión."
            },
            {
                text_en: "Symptoms of 'Hyperglycemia' (high blood sugar) include:",
                text_es: "Los síntomas de la 'Hiperglucemia' (azúcar alta) incluyen:",
                options_en: ["Extreme thirst and frequent urination", "Fast reflexes", "Cold skin", "High energy"],
                options_es: ["Sed extrema y micción frecuente", "Reflejos rápidos", "Piel fría", "Mucha energía"],
                correct: 0,
                reason_en: "The body tries to flush out excess sugar through the urine, causing thirst.",
                reason_es: "El cuerpo intenta eliminar el exceso de azúcar por la orina, causando sed."
            },
            {
                text_en: "Insulin and Glucagon are hormones produced by the:",
                text_es: "La insulina y el glucagón son hormonas producidas por el:",
                options_en: ["Liver", "Pancreas", "Stomach", "Heart"],
                options_es: ["Hígado", "Páncreas", "Estómago", "Corazón"],
                correct: 1,
                reason_en: "The pancreas serves as both an endocrine and exocrine gland.",
                reason_es: "El páncreas funciona como glándula endocrina y exocrina."
            },
            {
                text_en: "The 'Thyroid' gland controls the body's:",
                text_es: "La glándula 'Tiroides' controla el/la del cuerpo:",
                options_en: ["Metabolism (speed of energy use)", "Vision", "Hair color", "Foot size"],
                options_es: ["Metabolismo (velocidad de uso de energía)", "Visión", "Color del cabello", "Talla de pie"],
                correct: 0,
                reason_en: "Thyroid hormones affect heart rate, temperature, and how fast you burn calories.",
                reason_es: "Las hormonas tiroideas afectan al ritmo cardíaco, temperatura y quema de calorías."
            },
            {
                text_en: "A resident with 'Hypothyroidism' might feel:",
                text_es: "Un residente con 'Hipotiroidismo' podría sentirse:",
                options_en: ["Full of energy", "Cold, tired, and constipated", "Very hot", "Super hungry all the time"],
                options_es: ["Lleno de energía", "Frío, cansado y estreñido", "Muy acalorado", "Súper hambriento todo el tiempo"],
                correct: 1,
                reason_en: "Hypothyroidism means the thyroid is underactive and metabolism slows down.",
                reason_es: "El hipotiroidismo significa que la tiroides es poco activa y el metabolismo se ralentiza."
            },
            {
                text_en: "The Adrenal glands produce 'Cortisol' and 'Adrenaline', which help the body handle:",
                text_es: "Las glándulas suprarrenales producen 'Cortisol' y 'Adrenalina', que ayudan al cuerpo a manejar:",
                options_en: ["Sleep", "Stress and emergencies", "Digestion", "Vision"],
                options_es: ["El sueño", "El estrés y las emergencias", "La digestión", "La visión"],
                correct: 1,
                reason_en: "These hormones trigger the 'fight or flight' response.",
                reason_es: "Estas hormonas activan la respuesta de 'lucha o huida'."
            },
            {
                text_en: "Why is 'Foot Care' critical for residents with Diabetes?",
                text_es: "¿Por qué el 'Cuidado de los Pies' es crítico para residentes con Diabetes?",
                options_en: ["They want to look nice", "Loss of feeling (neuropathy) means they might not notice injuries", "They grow nails faster", "They have too much circulation"],
                options_es: ["Quieren verse bien", "La pérdida de sensibilidad (neuropatía) significa que no notarían lesiones", "Les crecen las uñas más rápido", "Tienen demasiada circulación"],
                correct: 1,
                reason_en: "Cuts can easily become infected and lead to amputation due to poor healing.",
                reason_es: "Los cortes pueden infectarse fácil y llevar a amputación por mala cicatrización."
            },
            {
                text_en: "What should the CNA never do with the feet of a diabetic resident?",
                text_es: "¿Qué no debe hacer nunca el CNA con los pies de un residente diabético?",
                options_en: ["Wash them daily", "Cut the toenails", "Apply lotion (avoiding between toes)", "Check for redness"],
                options_es: ["Lavarlos a diario", "Cortar las uñas de los pies", "Aplicar loción (evitando entre los dedos)", "Revisar si hay rojez"],
                correct: 1,
                reason_en: "Only a nurse or podiatrist should cut the toenails of a diabetic resident due to injury risk.",
                reason_es: "Solo una enfermera o podólogo debe cortar las uñas de un diabético por riesgo de lesión."
            },
            {
                text_en: "A resident's breath smells 'fruity' or like 'acetone'. This is a sign of:",
                text_es: "El aliento de un residente huele a 'frutas' o 'acetona'. Es un signo de:",
                options_en: ["Good hygiene", "Diabetic Ketoacidosis (DKA) - a serious complication", "Eating candy", "Drinking juice"],
                options_es: ["Buena higiene", "Cetoacidosis diabética (CAD) - una complicación grave", "Comer caramelos", "Beber zumo"],
                correct: 1,
                reason_en: "DKA is a life-threatening emergency caused by very high blood sugar.",
                reason_es: "La CAD es una emergencia vital causada por azúcar muy alta en sangre."
            },
            // 31. Neurological
            {
                text_en: "Parkinson's disease is caused by a lack of which chemical in the brain?",
                text_es: "La enfermedad de Parkinson es causada por falta de ¿qué químico en el cerebro?",
                options_en: ["Insulin", "Dopamine", "Estrogen", "Calcium"],
                options_es: ["Insulina", "Dopamina", "Estrógeno", "Calcio"],
                correct: 1,
                reason_en: "Dopamine helps control muscle movement.",
                reason_es: "La dopamina ayuda a controlar el movimiento muscular."
            },
            {
                text_en: "Multiple Sclerosis (MS) involves damage to the 'Myelin Sheath'. What is Myelin?",
                text_es: "La Esclerosis Múltiple (EM) daña la 'Vaina de Mielina'. ¿Qué es la Mielina?",
                options_en: ["Bone tissue", "The protective covering of nerve fibers", "A type of blood cell", "Skin pigment"],
                options_es: ["Tejido óseo", "La cubierta protectora de las fibras nerviosas", "Un tipo de célula sanguínea", "Pigmento de la piel"],
                correct: 1,
                reason_en: "Damage to myelin slows down electrical signals between the brain and body.",
                reason_es: "El daño a la mielina ralentiza las señales eléctricas entre cerebro y cuerpo."
            },
            {
                text_en: "ALS (Amyotrophic Lateral Sclerosis) is also known as:",
                text_es: "La ELA (Esclerosis Lateral Amiotrófica) también se conoce como:",
                options_en: ["Parkinson's", "Lou Gehrig's disease", "Alzheimer's", "Heart failure"],
                options_es: ["Parkinson", "Enfermedad de Lou Gehrig", "Alzheimer", "Insuficiencia cardíaca"],
                correct: 1,
                reason_en: "ALS is a progressive disease that weakens muscles and impacts physical function.",
                reason_es: "La ELA es una enfermedad progresiva que debilita los músculos e impacta la función física."
            },
            {
                text_en: "A stroke is medically called a CVA. CVA stands for:",
                text_es: "Un derrame se llama médicamente ACV. ACV significa:",
                options_en: ["Cerebrovascular Accident", "Cardiac Vascular Attack", "Common Ventricular Ailment", "Central Vision Atrophy"],
                options_es: ["Accidente Cerebrovascular", "Ataque Vascular Cardíaco", "Dolencia Ventricular Común", "Atrofia de la Visión Central"],
                correct: 0,
                reason_en: "A stroke occurs when blood supply to part of your brain is interrupted or reduced.",
                reason_es: "Un ACV ocurre cuando el suministro de sangre a una parte del cerebro se interrumpe o reduce."
            },
            {
                text_en: "Transient Ischemic Attacks (TIAs) typically last for:",
                text_es: "Los Ataques Isquémicos Transitorios (TIA) suelen durar:",
                options_en: ["A few minutes to less than 24 hours", "A week", "A month", "Forever"],
                options_es: ["Unos minutos a menos de 24 horas", "Una semana", "Un mes", "Para siempre"],
                correct: 0,
                reason_en: "TIAs are warning signs for future major strokes.",
                reason_es: "Los TIAs son señales de advertencia para futuros derrames mayores."
            },
            {
                text_en: "A resident has 'Expressive Aphasia'. This means they:",
                text_es: "Un residente tiene 'Afasia Expresiva'. Esto significa que:",
                options_en: ["Cannot understand what others say", "Have trouble speaking or finding the right words", "Cannot see", "Cannot walk"],
                options_es: ["No puede entender lo que dicen otros", "Tiene problemas para hablar o hallar las palabras correctas", "No puede ver", "No puede caminar"],
                correct: 1,
                reason_en: "The resident knows what they want to say but can't get the words out.",
                reason_es: "El residente sabe lo que quiere decir pero no puede sacar las palabras."
            },
            {
                text_en: "What should the CNA do to help a resident with 'Dysphagia' (difficulty swallowing)?",
                text_es: "¿Qué debe hacer el CNA para ayudar a un residente con 'Disfagia' (dificultad para tragar)?",
                options_en: ["Give them large bites of food", "Encourage talking while eating", "Ensure they are sitting upright (90 degrees) and follow the specific diet", "Leave them alone during meals"],
                options_es: ["Darles bocados grandes de comida", "Animarles a hablar mientras comen", "Asegurar que estén erguidos (90 grados) y seguir la dieta específica", "Dejarlos solos durante las comidas"],
                correct: 2,
                reason_en: "Proper positioning and diet (like thickened liquids) prevent aspiration.",
                reason_es: "La posición correcta y la dieta (como líquidos espesados) previenen la aspiración."
            },
            {
                text_en: "Hemiplegia is defined as:",
                text_es: "La Hemiplejía se define como:",
                options_en: ["Paralysis on one side of the body", "Paralysis from the waist down", "Paralysis in all four limbs", "Loss of memory"],
                options_es: ["Parálisis en un lado del cuerpo", "Parálisis de la cintura para abajo", "Parálisis en las cuatro extremidades", "Pérdida de memoria"],
                correct: 0,
                reason_en: "Hemiplegia is common after a stroke affecting one side of the brain.",
                reason_es: "La hemiplejía es común tras un ACV que afecta un lado del cerebro."
            },
            {
                text_en: "During a seizure, the primary goal for the CNA is to:",
                text_es: "Durante una convulsión, la meta principal del CNA es:",
                options_en: ["Stop the resident from moving", "Keep the resident safe from injury", "Put something in the resident's mouth", "Leave and get water"],
                options_es: ["Detener el movimiento del residente", "Mantener al residente a salvo de lesiones", "Poner algo en la boca del residente", "Irse y traer agua"],
                correct: 1,
                reason_en: "Loosen clothing and clear the area of furniture to protect the head.",
                reason_es: "Afloje la ropa y despeje el área de muebles para proteger la cabeza."
            },
            {
                text_en: "Alzheimer's disease is a specific type of:",
                text_es: "La enfermedad de Alzheimer es un tipo específico de:",
                options_en: ["Dementia", "Physical injury", "Temporary confusion", "Bad mood"],
                options_es: ["Demencia", "Lesión física", "Confusión temporal", "Mal humor"],
                correct: 0,
                reason_en: "Alzheimer's is the most common cause of dementia in older adults.",
                reason_es: "El Alzheimer es la causa más común de demencia en adultos mayores."
            },
            // 41. Musculoskeletal
            {
                text_en: "Osteoarthritis is caused by the 'wear and tear' of:",
                text_es: "La osteoartritis es causada por el 'desgaste' de:",
                options_en: ["Bones", "Cartilage inside the joints", "Muscles", "Skin"],
                options_es: ["Huesos", "Cartílago dentro de las articulaciones", "Músculos", "Piel"],
                correct: 1,
                reason_en: "Cartilage acts as a cushion; when it wears down, bones rub together causing pain.",
                reason_es: "El cartílago actúa como cojín; al desgastarse, los huesos rozan causando dolor."
            },
            {
                text_en: "Rheumatoid Arthritis (RA) is an 'Autoimmune' disease. This means:",
                text_es: "La Artritis Reumatoide (AR) es una enfermedad 'Autoinmune'. Significa:",
                options_en: ["It is caused by old age", "The body's immune system attacks its own joints", "It is contagious", "It only affects the feet"],
                options_es: ["Es causada por la vejez", "El sistema inmune del cuerpo ataca sus propias articulaciones", "Es contagiosa", "Solo afecta los pies"],
                correct: 1,
                reason_en: "RA causes painful swelling that can eventually result in bone erosion and joint deformity.",
                reason_es: "La AR causa hinchazón dolorosa que puede resultar en erosión ósea y deformidad."
            },
            {
                text_en: "Osteoporosis makes bones more likely to:",
                text_es: "La Osteoporosis hace que los huesos sean más propensos a:",
                options_en: ["Heal quickly", "Fracture (break) easily", "Grow larger", "Become heavier"],
                options_es: ["Sanar rápido", "Fracturarse (romperse) fácil", "Creciendo más", "Volverse más pesados"],
                correct: 1,
                reason_en: "Osteoporosis causes bones to become weak and brittle.",
                reason_es: "La osteoporosis hace que los huesos se vuelvan débiles y frágiles."
            },
            {
                text_en: "A 'Compound' (Open) fracture is one where:",
                text_es: "Una fractura 'Compuesta' (Abierta) es aquella donde:",
                options_en: ["The bone has multiple cracks", "The broken bone pierces the skin", "The bone is only bruised", "The bone is perfectly aligned"],
                options_es: ["El hueso tiene múltiples grietas", "El hueso roto atraviesa la piel", "El hueso solo tiene un moretón", "El hueso está alineado"],
                correct: 1,
                reason_en: "Compound fractures have a high risk of infection (osteomyelitis).",
                reason_es: "Las fracturas compuestas tienen un alto riesgo de infección (osteomielitis)."
            },
            {
                text_en: "After a Hip Replacement surgery, why is an 'Abductor Pillow' used?",
                text_es: "Tras una cirugía de Cadera, ¿por qué se usa una 'Almohada de Abducción'?",
                options_en: ["For comfort", "To keep the legs separated and prevent dislocation of the new hip", "To help the resident sleep", "To keep the head elevated"],
                options_es: ["Por comodidad", "Para mantener las piernas separadas y evitar luxación de la cadera", "Para ayudar al residente a dormir", "Para mantener la cabeza elevada"],
                correct: 1,
                reason_en: "Keeping the hip in alignment is critical for healing.",
                reason_es: "Mantener la cadera alineada es crítico para la curación."
            },
            {
                text_en: "Total Knee Arthroplasty (TKA) is another name for:",
                text_es: "La Artroplastia Total de Rodilla (ATR) es otro nombre para:",
                options_en: ["Knee cast", "Total Knee Replacement", "Knee x-ray", "Knee biopsy"],
                options_es: ["Yeso de rodilla", "Reemplazo Total de Rodilla", "Radiografía de rodilla", "Biopsia de rodilla"],
                correct: 1,
                reason_en: "TKA is a common surgery for severe knee arthritis.",
                reason_es: "La ATR es una cirugía común para la artritis de rodilla severa."
            },
            {
                text_en: "What is a 'Contracture'?",
                text_es: "¿Qué es una 'Contractura'?",
                options_en: ["A legal agreement", "Permanent shortening of a muscle, tendon, or ligament", "A type of muscle growth", "A sore throat"],
                options_es: ["Un acuerdo legal", "Acortamiento permanente de un músculo, tendón o ligamento", "Un tipo de crecimiento muscular", "Dolor de garganta"],
                correct: 1,
                reason_en: "Contractures result in deformity and limited joint movement.",
                reason_es: "Las contracturas resultan en deformidad y movimiento articular limitado."
            },
            {
                text_en: "Muscle 'Atrophy' is most often caused by:",
                text_es: "La 'Atrofia' muscular es causada mayormente por:",
                options_en: ["Exercising too much", "Lack of use or immobility", "Eating too much protein", "Sleeping"],
                options_es: ["Ejercitarse demasiado", "Falta de uso o inmovilidad", "Comer mucha proteína", "Dormir"],
                correct: 1,
                reason_en: "Unused muscles shrink and lose strength quickly.",
                reason_es: "Los músculos no usados se encogen y pierden fuerza rápido."
            },
            {
                text_en: "ROM stands for Range of Motion. 'Passive' ROM means:",
                text_es: "ROM significa Rango de Movimiento. ROM 'Pasivo' significa:",
                options_en: ["The resident does the exercises alone", "The CNA moves the resident's joints through the exercises", "The resident uses weights", "The resident only visualizes the exercise"],
                options_es: ["El residente hace ejercicios solo", "El CNA mueve las articulaciones del residente en los ejercicios", "El residente usa pesas", "El residente solo visualiza el ejercicio"],
                correct: 1,
                reason_en: "Passive ROM is used for residents who cannot move their limbs independently.",
                reason_es: "El ROM pasivo se usa para clientes que no pueden mover sus miembros solos."
            },
            {
                text_en: "When caring for a resident with a cast, what is a sign of poor circulation?",
                text_es: "Al cuidar a un residente con yeso, ¿qué es un signo de mala circulación?",
                options_en: ["The resident is hungry", "The toes are cold, blue, or numb", "The cast is white", "The resident is sleepy"],
                options_es: ["El residente tiene hambre", "Los dedos están fríos, azules o entumecidos", "El yeso es blanco", "El residente tiene sueño"],
                correct: 1,
                reason_en: "This is a priority and must be reported immediately as it can cause tissue damage.",
                reason_es: "Es una prioridad e informar de inmediato pues causa daño al tejido."
            },
            // 51. Renal/GI
            {
                text_en: "Kidneys filter waste products and excess water from the blood to produce:",
                text_es: "Los riñones filtran desechos y exceso de agua de la sangre para producir:",
                options_en: ["Bile", "Urine", "Stool", "Sweat"],
                options_es: ["Bilis", "Orina", "Heces", "Sudor"],
                correct: 1,
                reason_en: "The urine then travels to the bladder for storage.",
                reason_es: "La orina luego viaja a la vejiga para su almacenamiento."
            },
            {
                text_en: "A resident has 'Renal Failure'. This means their kidneys:",
                text_es: "Un residente tiene 'Insuficiencia Renal'. Significa que sus riñones:",
                options_en: ["Are too large", "Have stopped working effectively", "Are producing too much urine", "Have disappeared"],
                options_es: ["Son muy grandes", "Han dejado de funcionar eficazmente", "Producen mucha orina", "Han desaparecido"],
                correct: 1,
                reason_en: "Renal failure can be acute (temporary) or chronic (long-term).",
                reason_es: "La insuficiencia renal puede ser aguda (temporal) o crónica (largo plazo)."
            },
            {
                text_en: "Why do some residents with kidney failure need 'Dialysis'?",
                text_es: "¿Por qué algunos residentes con insuficiencia renal necesitan 'Diálisis'?",
                options_en: ["To help them sleep", "To do the job the kidneys can no longer do (filtering blood)", "To increase their appetite", "To help them walk"],
                options_es: ["Para ayudarles a dormir", "Para hacer el trabajo que el riñón no puede (filtrar sangre)", "Para aumentar su apetito", "Para ayudarles a caminar"],
                correct: 1,
                reason_en: "Dialysis uses a machine to filter waste and fluid from the blood.",
                reason_es: "La diálisis usa una máquina para filtrar desechos y líquido de la sangre."
            },
            {
                text_en: "What is Urinary Incontinence?",
                text_es: "¿Qué es la Incontinencia Urinaria?",
                options_en: ["Inability to control the bladder", "Being able to hold urine for a long time", "Normal urination", "A type of kidney stone"],
                options_es: ["Incapacidad de controlar la vejiga", "Poder retener la orina mucho tiempo", "Micción normal", "Un tipo de cálculo renal"],
                correct: 0,
                reason_en: "Incontinence is not a normal part of aging, but is more common in elderly residents.",
                reason_es: "La incontinencia no es normal al envejecer, pero es común en ancianos."
            },
            {
                text_en: "Heartburn and acid reflux are major symptoms of:",
                text_es: "La acidez y el reflujo ácido son síntomas principales de:",
                options_en: ["COPD", "GERD (Gastroesophageal Reflux Disease)", "Diabetes", "PVD"],
                options_es: ["EPOC", "ERGE (Enfermedad por Reflujo Gastroesofágico)", "Diabetes", "EVP"],
                correct: 1,
                reason_en: "GERD occurs when stomach acid flows back into the esophagus.",
                reason_es: "El ERGE ocurre cuando el ácido del estómago vuelve al esófago."
            },
            {
                text_en: "What is an 'Ostomy'?",
                text_es: "¿Qué es una 'Ostomía'?",
                options_en: ["A type of stomach flu", "An artificial opening in the body for waste elimination", "A weight-loss surgery", "A hearing test"],
                options_es: ["Un tipo de gripe estomocal", "Una abertura artificial en el cuerpo para eliminar desechos", "Una cirugía para perder peso", "Una prueba de oído"],
                correct: 1,
                reason_en: "Common types include colostomy (colon) and ileostomy (small intestine).",
                reason_es: "Tipos comunes incluyen colostomía (colon) e ileostomía (intestino delgado)."
            },
            {
                text_en: "An 'Enema' is a liquid injected into the:",
                text_es: "Un 'Enema' es un líquido inyectado en el/la:",
                options_en: ["Stomach", "Rectum to stimulate a bowel movement", "Bladder", "Vein"],
                options_es: ["Estómago", "Recto para estimular la evacuación", "Vejiga", "Vena"],
                correct: 1,
                reason_en: "Enemas are used to treat constipation or prepare for a medical procedure.",
                reason_es: "Los enemas tratan el estreñimiento o preparan para un procedimiento médico."
            },
            {
                text_en: "Fecal Impaction is characterized by:",
                text_es: "La Impactación Fecal se caracteriza por:",
                options_en: ["Watery diarrhea only", "A hard mass of stool stuck in the rectum", "Fast digestion", "Increased hunger"],
                options_es: ["Solo diarrea líquida", "Una masa dura de heces atascada en el recto", "Digestión rápida", "Aumento del hambre"],
                correct: 1,
                reason_en: "Liquid stool might leak around the impaction, which is why diarrhea can be a sign.",
                reason_es: "Heces líquidas pueden filtrarse tras la impactación; por eso la diarrea es un signo."
            },
            {
                text_en: "What should the CNA do for a resident on 'Fluid Restriction'?",
                text_es: "¿Qué debe hacer el CNA por un residente con 'Restricción de Líquidos'?",
                options_en: ["Encourage them to drink a lot", "Carefully measure and record all liquid intake and follows the nurse's limits", "Hide all water from the resident", "Ignore the order"],
                options_es: ["Animarlos a beber mucho", "Medir y registrar con cuidado toda ingesta de líquidos y seguir los límites", "Esconder toda el agua al residente", "Ignorarlo"],
                correct: 1,
                reason_en: "Fluid restriction is often ordered for heart or kidney failure.",
                reason_es: "La restricción se ordena a menudo por insuficiencia cardíaca o renal."
            },
            {
                text_en: "The 'Master Gland' of the endocrine system is the:",
                text_es: "La 'Glándula Maestra' del sistema endocrino es la:",
                options_en: ["Pituitary", "Thyroid", "Adrenal", "Pancreas"],
                options_es: ["Pituitaria", "Tiroides", "Suprarrenal", "Páncreas"],
                correct: 0,
                reason_en: "The pituitary gland controls many other endocrine glands in the body.",
                reason_es: "La glándula pituitaria controla muchas otras glándulas endocrinas del cuerpo."
            }
        ]
    },
    {
        name: "Simulacro Mixto 4",
        questions: [
            // 1. Mental Health - Depression
            {
                text_en: "A resident who usually enjoys activities suddenly stops participating and stays in bed all day. This could be a sign of:",
                text_es: "Un residente que suele disfrutar de las actividades de repente deja de participar y se queda en cama todo el día. Esto podría ser un signo de:",
                options_en: ["Laziness", "Depression", "Getting better sleep", "A new hobby"],
                options_es: ["Pereza", "Depresión", "Dormir mejor", "Un nuevo pasatiempo"],
                correct: 1,
                reason_en: "Withdrawal from social activities and loss of interest are key indicators of clinical depression.",
                reason_es: "El retiro de las actividades sociales y la pérdida de interés son indicadores clave de la depresión clínica."
            },
            {
                text_en: "If a resident expresses thoughts of suicide, the CNA's FIRST action should be:",
                text_es: "Si un residente expresa pensamientos suicidas, la PRIMERA acción del CNA debe ser:",
                options_en: ["Tell them everything will be fine", "Leave them alone to think", "Stay with the resident and notify the nurse immediately", "Ignore it as they are likely just seeking attention"],
                options_es: ["Decirles que todo estará bien", "Dejarlos solos para pensar", "Quedarse con el residente e informar a la enfermera de inmediato", "Ignorarlo pues probablemente solo quieran llamar la atención"],
                correct: 2,
                reason_en: "Suicidal ideation is a medical emergency that requires constant supervision until professional help arrives.",
                reason_es: "La ideación suicida es una emergencia médica que requiere supervisión constante hasta que llegue ayuda profesional."
            },
            // 2. Mental Health - Anxiety
            {
                text_en: "A resident is pacing and breathing rapidly, appearing very anxious. What should the CNA do?",
                text_es: "Un residente camina de un lado a otro y respira rápido, pareciendo muy ansioso. ¿Qué debe hacer el CNA?",
                options_en: ["Tell them to 'snap out of it'", "Speak in a calm, low voice and offer to listen", "Shout to get their attention", "Lock them in their room"],
                options_es: ["Decirles que 'reaccionen'", "Hablar con voz tranquila y baja y ofrecerse a escuchar", "Gritar para llamar su atención", "Encerrarlos en su habitación"],
                correct: 1,
                reason_en: "A calm presence and active listening can help de-escalate anxiety.",
                reason_es: "Una presencia tranquila y la escucha activa pueden ayudar a reducir la ansiedad."
            },
            // 3. Mental Health - Schizophrenia/Hallucinations
            {
                text_en: "A resident tells the CNA, 'There are spiders crawling all over my bed,' but the CNA sees none. This is an example of a:",
                text_es: "Un residente le dice al CNA: 'Hay arañas gateando por toda mi cama', pero el CNA no ve ninguna. Este es un ejemplo de:",
                options_en: ["Delusion", "Hallucination", "Lie", "Bad dream"],
                options_es: ["Delirio", "Alucinación", "Mentira", "Mal sueño"],
                correct: 1,
                reason_en: "A hallucination is a sensory perception (seeing, hearing, feeling) of something that isn't there.",
                reason_es: "Una alucinación es una percepción sensorial (ver, oír, sentir) de algo que no existe."
            },
            {
                text_en: "When a resident is having a hallucination, the CNA should:",
                text_es: "Cuando un residente tiene una alucinación, el CNA debe:",
                options_en: ["Argue that the spiders aren't real", "Acknowledge the resident's feelings without confirming the hallucination", "Laugh at the resident", "Call them 'crazy'"],
                options_es: ["Discutir que las arañas no son reales", "Reconocer los sentimientos del residente sin confirmar la alucinación", "Reírse del residente", "Llamarlos 'locos'"],
                correct: 1,
                reason_en: "The CNA should validate the resident's distress ('I understand you are scared') without lying ('I see them too').",
                reason_es: "El CNA debe validar la angustia del residente ('Entiendo que tiene miedo') sin mentir ('Yo también las veo')."
            },
            // 4. Advanced Protocols - Vitals
            {
                text_en: "Which of the following blood pressure readings would be considered an emergency (Hypertensive Crisis)?",
                text_es: "¿Cuál de las siguientes lecturas de presión arterial se consideraría una emergencia (crisis hipertensiva)?",
                options_en: ["120/80 mmHg", "130/85 mmHg", "185/120 mmHg", "110/70 mmHg"],
                options_es: ["120/80 mmHg", "130/85 mmHg", "185/120 mmHg", "110/70 mmHg"],
                correct: 2,
                reason_en: "Readings above 180/120 require immediate medical attention to prevent organ damage.",
                reason_es: "Lecturas superiores a 180/120 requieren atención médica inmediata para prevenir daños orgánicos."
            },
            {
                text_en: "If a CNA takes a resident's pulse and finds it to be 45 beats per minute, this is called:",
                text_es: "Si un CNA toma el pulso de un residente y encuentra que es de 45 latidos por minuto, esto se llama:",
                options_en: ["Tachycardia", "Bradycardia", "Normal", "Hypertension"],
                options_es: ["Taquicardia", "Bradicardia", "Normal", "Hipertensión"],
                correct: 1,
                reason_en: "Bradycardia is a heart rate below 60 beats per minute.",
                reason_es: "La bradicardia es una frecuencia cardíaca inferior a 60 latidos por minuto."
            },
            {
                text_en: "Tachycardia is defined as a heart rate over:",
                text_es: "La taquicardia se define como una frecuencia cardíaca superior a:",
                options_en: ["60 bpm", "80 bpm", "100 bpm", "120 bpm"],
                options_es: ["60 lpm", "80 lpm", "100 lpm", "120 lpm"],
                correct: 2,
                reason_en: "A heart rate over 100 bpm in a resting adult is considered tachycardia.",
                reason_es: "Un ritmo cardíaco de más de 100 lpm en un adulto en reposo se considera taquicardia."
            },
            // 5. Advanced Protocols - Admission/Transfer/Discharge
            {
                text_en: "During the 'Admission' process, the CNA's most important role is to:",
                text_es: "Durante el proceso de 'Admisión', el papel más importante del CNA es:",
                options_en: ["Sign insurance papers", "Make the resident feel welcome and comfortable", "Prescribe medications", "Give a medical diagnosis"],
                options_es: ["Firmar papeles del seguro", "Hacer que el residente se sienta bienvenido y cómodo", "Prescribir medicamentos", "Dar un diagnóstico médico"],
                correct: 1,
                reason_en: "The CNA helps ease the transition and gathers baseline data (height, weight, vitals).",
                reason_es: "El CNA ayuda a facilitar la transición y recopila datos básicos (altura, peso, constantes vitales)."
            },
            {
                text_en: "When a resident is being 'Discharged', the CNA should help by:",
                text_es: "Cuando un residente recibe el 'Alta', el CNA debe ayudar:",
                options_en: ["Packing the resident's personal belongings", "Telling them they shouldn't leave", "Keeping their favorite items", "Charging them for the stay"],
                options_es: ["Empacando las pertenencias personales del residente", "Diciéndoles que no deberían irse", "Quedándose con sus artículos favoritos", "Cobrándoles por la estancia"],
                correct: 0,
                reason_en: "Ensuring all personal items are accounted for is a key CNA responsibility during discharge.",
                reason_es: "Asegurarse de que todos los artículos personales se contabilicen es una responsabilidad clave del CNA durante el alta."
            },
            // 6. Communication - Conflict Resolution
            {
                text_en: "If two residents are arguing in the dining room, the CNA should FIRST:",
                text_es: "Si dos residentes están discutiendo en el comedor, el CNA debe PRIMERO:",
                options_en: ["Ignore them", "Join the argument", "Separate the residents and try to de-escalate the situation", "Call the police immediately"],
                options_es: ["Ignorarlos", "Unirse a la discusión", "Separar a los residentes e intentar calmar la situación", "Llamar a la policía de inmediato"],
                correct: 2,
                reason_en: "Ensuring safety and reducing tension is the priority when conflicts arise.",
                reason_es: "Garantizar la seguridad y reducir la tensión es la prioridad cuando surgen conflictos."
            },
            {
                text_en: "When a family member is angry and complaining about the facility, the CNA should:",
                text_es: "Cuando un familiar está enojado y se queja de la instalación, el CNA debe:",
                options_en: ["Argue back", "Listen patiently and report the concerns to the nurse", "Tell them to leave", "Give them a discount"],
                options_es: ["Responder discutiendo", "Escuchar pacientemente e informar de las preocupaciones a la enfermera", "Decirles que se vayan", "Darles un descuento"],
                correct: 1,
                reason_en: "Professionalism and active listening are essential for resolving family concerns.",
                reason_es: "El profesionalismo y la escucha activa son esenciales para resolver las preocupaciones de la familia."
            },
            // 7. Grief & Loss
            {
                text_en: "Which of the following is the first stage of grief according to Elizabeth Kübler-Ross?",
                text_es: "¿Cuál de las siguientes es la primera etapa del duelo según Elizabeth Kübler-Ross?",
                options_en: ["Anger", "Bargaining", "Denial", "Depression"],
                options_es: ["Ira", "Negociación", "Negación", "Depresión"],
                correct: 2,
                reason_en: "Denial is often the initial reaction to shocking news or loss.",
                reason_es: "La negación suele ser la reacción inicial ante noticias impactantes o pérdidas."
            },
            {
                text_en: "The 'Bargaining' stage of grief involves:",
                text_es: "La etapa de 'Negociación' del duelo implica:",
                options_en: ["Being very angry", "Trying to make deals with God or doctors for more time", "Crying all day", "Accepting death"],
                options_es: ["Estar muy enojado", "Intentar hacer tratos con Dios o los médicos para ganar tiempo", "Llorar todo el día", "Aceptar la muerte"],
                correct: 1,
                reason_en: "Bargaining is an attempt to postpone the inevitable loss.",
                reason_es: "La negociación es un intento de posponer la pérdida inevitable."
            },
            {
                text_en: "When a resident is in the 'Acceptance' stage of dying, they may:",
                text_es: "Cuando un residente está en la etapa de 'Aceptación' de la muerte, puede:",
                options_en: ["Be very talkative", "Become quiet and withdrawn as they prepare for the end", "Fight with everyone", "Ask for a lot of food"],
                options_es: ["Estar muy hablador", "Volverse callado y retraído mientras se prepara para el final", "Pelear con todos", "Pedir mucha comida"],
                correct: 1,
                reason_en: "Acceptance is often a period of quiet peace before death.",
                reason_es: "La aceptación suele ser un periodo de paz tranquila antes de la muerte."
            },
            // 8. End-of-Life Care - Physical Changes
            {
                text_en: "Which of the following is a physical sign of approaching death?",
                text_es: "¿Cuál de las siguientes es una señal física de muerte inminente?",
                options_en: ["Increased appetite", "Irregular 'Cheyne-Stokes' breathing", "Warm skin", "High blood pressure"],
                options_es: ["Aumento del apetito", "Respiración irregular de 'Cheyne-Stokes'", "Piel cálida", "Presión arterial alta"],
                correct: 1,
                reason_en: "Cheyne-Stokes breathing consists of periods of shallow breathing followed by periods of no breathing (apnea).",
                reason_es: "La respiración de Cheyne-Stokes consiste en periodos de respiración superficial seguidos de periodos sin respiración (apnea)."
            },
            {
                text_en: "What happens to the skin as death approaches?",
                text_es: "¿Qué le sucede a la piel a medida que se acerca la muerte?",
                options_en: ["It becomes red and hot", "It may become cold, pale, and mottled (bluish spots)", "It becomes very oily", "No changes occurred"],
                options_es: ["Se vuelve roja y caliente", "Puede volverse fría, pálida y moteada (manchas azuladas)", "Se vuelve muy grasa", "No hay cambios"],
                correct: 1,
                reason_en: "Mottling is caused by slowed circulation in the extremities.",
                reason_es: "El moteado se debe a la ralentización de la circulación en las extremidades."
            },
            {
                text_en: "The last sense to be lost before death is usually:",
                text_es: "El último sentido que se suele perder antes de la muerte es:",
                options_en: ["Sight", "Taste", "Hearing", "Touch"],
                options_es: ["Vista", "Gusto", "Oído", "Tacto"],
                correct: 2,
                reason_en: "Always continue talking to dying residents, as they may still be able to hear you.",
                reason_es: "Continúe hablando siempre con los residentes moribundos, ya que es posible que aún puedan oírle."
            },
            // 9. Post-Mortem Care
            {
                text_en: "What should the CNA do during post-mortem care?",
                text_es: "¿Qué debe hacer el CNA durante el cuidado post-mórtem?",
                options_en: ["Leave the resident as they are", "Treat the body with respect and dignity, closing eyes and positioning correctly", "Invite other residents to see", "Remove all identification tags"],
                options_es: ["Dejar al residente como está", "Tratar el cuerpo con respeto y dignidad, cerrando los ojos y colocándolo correctamente", "Invitar a otros residentes a ver", "Quitar todas las etiquetas de identificación"],
                correct: 1,
                reason_en: "Respect for the deceased is a fundamental nursing responsibility.",
                reason_es: "El respeto por el difunto es una responsabilidad de enfermería fundamental."
            },
            {
                text_en: "During post-mortem care, the CNA should leave which of the following in place unless otherwise instructed?",
                text_es: "Durante el cuidado post-mórtem, ¿el CNA debería dejar en su lugar cuál de los siguientes a menos que se indique lo contrario?",
                options_en: ["Dentures", "Jewelry", "Hearing aids", "Clothing"],
                options_es: ["Dentaduras postizas", "Joyas", "Audífonos", "Ropa"],
                correct: 0,
                reason_en: "Dentures help maintain the natural shape of the face after death.",
                reason_es: "Las dentaduras postizas ayudan a mantener la forma natural de la cara después de la muerte."
            },
            // 10. Advanced Medical Terminology
            {
                text_en: "What does 'PRN' mean in medical documentation?",
                text_es: "¿Qué significa 'PRN' en la documentación médica?",
                options_en: ["Every day", "As needed", "Immediately", "Before meals"],
                options_es: ["Cada día", "Según sea necesario", "Inmediatamente", "Antes de las comidas"],
                correct: 1,
                reason_en: "PRN is from the Latin 'pro re nata', meaning as the situation arises.",
                reason_es: "PRN viene del latín 'pro re nata', que significa según surja la situación."
            },
            {
                text_en: "The abbreviation 'NPO' means:",
                text_es: "La abreviatura 'NPO' significa:",
                options_en: ["Nothing by mouth", "New patient only", "Night physician on-call", "Next period often"],
                options_es: ["Nada por vía oral", "Solo nuevo paciente", "Médico de noche de guardia", "Próximo periodo a menudo"],
                correct: 0,
                reason_en: "NPO stands for 'nil per os', meaning the resident should not eat or drink anything.",
                reason_es: "NPO significa 'nil per os', lo que indica que el residente no debe comer ni beber nada."
            },
            {
                text_en: "What does 'Stat' mean?",
                text_es: "¿Qué significa 'Stat'?",
                options_en: ["Slowly", "Later tonight", "Immediately", "Once a week"],
                options_es: ["Lentamente", "Más tarde esta noche", "Inmediatamente", "Una vez por semana"],
                correct: 2,
                reason_en: "Stat indicates an urgent need for action or medication.",
                reason_es: "Stat indica una necesidad urgente de acción o medicación."
            },
            // 11. Mental Health - Obsessive Compulsive Disorder
            {
                text_en: "A resident has a ritual of washing their hands 20 times before every meal. This is a common sign of:",
                text_es: "Un residente tiene el ritual de lavarse las manos 20 veces antes de cada comida. Es un signo de:",
                options_en: ["Good hygiene", "Obsessive-Compulsive Disorder (OCD)", "Boredom", "Hunger"],
                options_es: ["Buena higiene", "Trastorno Obsesivo-Compulsivo (TOC)", "Aburrimiento", "Hambre"],
                correct: 1,
                reason_en: "OCD involves repetitive behaviors or thoughts that the person feels driven to perform.",
                reason_es: "El TOC implica comportamientos o pensamientos repetitivos que la persona se siente impulsada a realizar."
            },
            // 12. Advanced Protocols - Isolation
            {
                text_en: "A resident with C-diff (Clostridium difficile) requires which type of precaution?",
                text_es: "Un residente con C-diff (Clostridium difficile) requiere ¿qué tipo de precaución?",
                options_en: ["Airborne", "Contact Precautions", "No precautions", "Droplet"],
                options_es: ["Aérea", "Precauciones de contacto", "Sin precauciones", "Gotitas"],
                correct: 1,
                reason_en: "C-diff is spread through contact with contaminated surfaces or hands.",
                reason_es: "El C-diff de propaga por contacto con superficies o manos contaminadas."
            },
            {
                text_en: "When caring for a resident with Contact Precautions, the CNA must wear:",
                text_es: "Al cuidar a un residente con Precauciones de Contacto, el CNA debe usar:",
                options_en: ["Only a mask", "Gown and gloves", "Safety goggles only", "A heavy coat"],
                options_es: ["Solo una máscara", "Bata y guantes", "Solo gafas de seguridad", "Un abrigo pesado"],
                correct: 1,
                reason_en: "Gown and gloves protect the CNA's skin and clothing from contamination.",
                reason_es: "La bata y los guantes protegen la piel y la ropa del CNA de la contaminación."
            },
            // 13. Mental Health - Bipolar Disorder
            {
                text_en: "Bipolar Disorder is characterized by:",
                text_es: "El Trastorno Bipolar se caracteriza por:",
                options_en: ["Extreme mood swings between mania (high energy) and depression (low energy)", "Being happy all the time", "Memory loss", "Fear of spiders"],
                options_es: ["Cambios extremos de humor entre manía (mucha energía) y depresión (poca energía)", "Estar feliz siempre", "Pérdida de memoria", "Miedo a las arañas"],
                correct: 0,
                reason_en: "These cycles can last for days, weeks, or months.",
                reason_es: "Estos ciclos pueden durar días, semanas o meses."
            },
            // 14. Advanced Protocols - Feeding Tubes
            {
                text_en: "A resident with a G-tube (gastrostomy tube) should be positioned how during feeding?",
                text_es: "¿Cómo debe colocarse un residente con una sonda G (gastrostomía) durante la alimentación?",
                options_en: ["Lying flat", "With the head of the bed elevated (30-45 degrees)", "On their side", "Upside down"],
                options_es: ["Acostado plano", "Con la cabecera de la cama elevada (30-45 grados)", "De lado", "Boca abajo"],
                correct: 1,
                reason_en: "Elevation helps prevent aspiration of the feeding solution.",
                reason_es: "La elevación ayuda a prevenir la aspiración de la solución alimenticia."
            },
            {
                text_en: "Which of the following should be reported to the nurse immediately regarding a G-tube?",
                text_es: "¿Cuál de los siguientes debe informarse a la enfermera de inmediato respecto a una sonda G?",
                options_en: ["The tube is dry", "Redness, swelling, or drainage around the tube site", "The resident is awake", "The resident is wearing socks"],
                options_es: ["La sonda está seca", "Rojez, hinchazón o drenaje alrededor del sitio de la sonda", "El residente está despierto", "El residente lleva calcetines"],
                correct: 1,
                reason_en: "These are signs of infection or tube displacement.",
                reason_es: "Estos son signos de infección o desplazamiento de la sonda."
            },
            // 15. Mental Health - Pica
            {
                text_en: "What is 'Pica'?",
                text_es: "¿Qué es la 'Pica'?",
                options_en: ["A type of bird", "Eating non-food items like dirt, paper, or ice", "Excessive thirst", "Sleeping walking"],
                options_es: ["Un tipo de ave", "Comer artículos no alimenticios como tierra, papel o hielo", "Sed excesiva", "Sonambulismo"],
                correct: 1,
                reason_en: "Pica can be a sign of nutritional deficiency or cognitive impairment.",
                reason_es: "La pica puede ser un signo de deficiencia nutricional o deterioro cognitivo."
            },
            // 16. Advanced Protocols - Restraints
            {
                text_en: "Restraints can ONLY be used if:",
                text_es: "Las sujeciones SOLO pueden usarse si:",
                options_en: ["The CNA is tired", "There is a specific doctor's order and it is necessary for safety", "The resident is annoying", "The family asks for them"],
                options_es: ["El CNA está cansado", "Hay una orden médica específica y es necesario por seguridad", "El residente es molesto", "La familia las pide"],
                correct: 1,
                reason_en: "Restraints should be the last resort after all other alternatives have failed.",
                reason_es: "Las sujeciones deben ser el último recurso después de que fallen todas las alternativas."
            },
            {
                text_en: "If a resident is in a physical restraint, the CNA must check them at least every:",
                text_es: "Si un residente tiene una sujeción física, el CNA debe revisarlo al menos cada:",
                options_en: ["15 minutes", "1 hour", "2 hours", "4 hours"],
                options_es: ["15 minutos", "1 hora", "2 horas", "4 horas"],
                correct: 0,
                reason_en: "Frequent checks are necessary to ensure circulation and safety.",
                reason_es: "Las revisiones frecuentes son necesarias para asegurar la circulación y seguridad."
            },
            {
                text_en: "A restraint must be removed and the resident released For at least 15 minutes every:",
                text_es: "Se debe quitar la sujeción y liberar al residente al menos 15 minutos cada:",
                options_en: ["30 minutes", "1 hour", "2 hours", "Shift change"],
                options_es: ["30 minutos", "1 hora", "2 horas", "Cambio de turno"],
                correct: 2,
                reason_en: "Regular release allows for movement, skin checks, and toileting.",
                reason_es: "La liberación regular permite movimiento, revisión de la piel y uso del baño."
            },
            // 17. Mental Health - Sundowning Interventions
            {
                text_en: "To help a resident with 'Sundowning', the CNA should:",
                text_es: "Para ayudar a un residente con 'Síndrome del Ocaso', el CNA debe:",
                options_en: ["Turn off all lights early", "Provide a calm environment and maintain a consistent routine", "Large groups of visitors", "Loud music"],
                options_es: ["Apagar todas las luces pronto", "Proveer un ambiente tranquilo y mantener una rutina constante", "Grandes grupos de visitantes", "Música fuerte"],
                correct: 1,
                reason_en: "Routine and calm help reduce the confusion and agitation that occurs later in the day.",
                reason_es: "La rutina y la calma ayudan a reducir la confusión y agitación que ocurre al final del día."
            },
            // 18. Advanced Protocols - Specimen Collection
            {
                text_en: "A 'Mid-Stream' (Clean Catch) urine specimen is collected by:",
                text_es: "Un espécimen de orina de 'Chorro Medio' se recolecta:",
                options_en: ["Collecting all urine for 24 hours", "Starting the stream, then catching the middle portion in the cup", "Catching the first drop of urine", "Using a catheter"],
                options_es: ["Recogiendo toda la orina de 24 horas", "Iniciando el chorro y luego atrapando la parte media en la copa", "Atrapando la primera gota de orina", "Usando una sonda"],
                correct: 1,
                reason_en: "Clean catch reduces the presence of bacteria from the skin in the sample.",
                reason_es: "El chorro medio reduce la presencia de bacterias de la piel en la muestra."
            },
            {
                text_en: "When collecting a 24-hour urine specimen, the CNA should:",
                text_es: "Al recolectar un espécimen de orina de 24 horas, el CNA debe:",
                options_en: ["Discard the first morning void, then collect all urine for the next 24 hours", "Keep the first void and stop after 6 hours", "Leave the container open in the bathroom", "Only collect urine from the night shift"],
                options_es: ["Descartar la primera micción, luego recoger toda la orina por las próximas 24 horas", "Quedarse con la primera y parar tras 6 horas", "Dejar el contenedor abierto en el baño", "Solo recoger orina del turno de noche"],
                correct: 0,
                reason_en: "The test starts with an empty bladder and collects every drop for a full day.",
                reason_es: "La prueba inicia con la vejiga vacía y recoge cada gota durante un día completo."
            },
            // 19. Mental Health - Validation vs. Reality Orientation
            {
                text_en: "Reality Orientation is best used for residents who are:",
                text_es: "La Orientación a la Realidad se usa mejor para residentes que están:",
                options_en: ["Completely unconscious", "Experiencing temporary confusion (delirium)", "In the late stages of Alzheimer's", "Sleeping"],
                options_es: ["Completamente inconscientes", "Experimentando confusión temporal (delirio)", "En etapas tardías de Alzheimer", "Durmiendo"],
                correct: 1,
                reason_en: "Reality orientation (using calendars, clocks) helps orient those who can still process facts.",
                reason_es: "La orientación a la realidad (usar calendarios, relojes) ayuda a orientar a quienes aún procesan hechos."
            },
            // 20. Advanced Protocols - Wound Care
            {
                text_en: "What is a 'Pressure Injury' (Stage 4) characterized by?",
                text_es: "¿Por qué se caracteriza una 'Lesión por Presión' (Etapa 4)?",
                options_en: ["Red skin that doesn't fade", "A small blister", "Full-thickness tissue loss with exposed bone, tendon, or muscle", "A simple scrape"],
                options_es: ["Piel roja que no desaparece", "Una pequeña ampolla", "Pérdida total del tejido con hueso, tendón o músculo expuesto", "Un simple rasguño"],
                correct: 2,
                reason_en: "Stage 4 is the most severe and carries a very high risk of infection.",
                reason_es: "La etapa 4 es la más grave y conlleva un riesgo muy alto de infección."
            },
            {
                text_en: "Which area is most at risk for pressure injuries in a resident who lies on their back?",
                text_es: "¿Qué zona tiene más riesgo de lesiones por presión en un residente acostado de espaldas?",
                options_en: ["Elbows", "Sacrum (tailbone)", "Shoulders", "All of the above"],
                options_es: ["Codos", "Sacro (cóccix)", "Hombros", "Todas las anteriores"],
                correct: 3,
                reason_en: "Bony prominences are where pressure is most concentrated.",
                reason_es: "Las prominencias óseas es donde más se concentra la presión."
            },
            // 21. Mental Health - Elder Abuse
            {
                text_en: "If a CNA suspects a coworker is physically abusing a resident, they must:",
                text_es: "Si un CNA sospecha que un compañero abusa físicamente de un residente, debe:",
                options_en: ["Tell the coworker to stop", "Wait for more proof", "Report it immediately according to facility policy", "Ignore it"],
                options_es: ["Decirle al compañero que pare", "Esperar por más pruebas", "Informar de inmediato según la política de la instalación", "Ignorarlo"],
                correct: 2,
                reason_en: "CNAs are mandated reporters and must act to protect residents.",
                reason_es: "Los CNAs son informadores obligatorios y deben actuar para proteger a los residentes."
            },
            // 22. Advanced Protocols - IV Care
            {
                text_en: "Can a CNA start or stop an IV (intravenous) line?",
                text_es: "¿Puede un CNA iniciar o detener una vía IV (intravenosa)?",
                options_en: ["Yes, if they are fast", "No, it is outside the CNA scope of practice", "Only on weekends", "Yes, if the resident asks"],
                options_es: ["Sí, si son rápidos", "No, está fuera del alcance de la práctica del CNA", "Solo los fines de semana", "Sí, si el residente lo pide"],
                correct: 1,
                reason_en: "Only licensed nurses or doctors can perform invasive procedures like IV starts.",
                reason_es: "Solo enfermeras con licencia o médicos pueden realizar procesos invasivos como iniciar una vía IV."
            },
            {
                text_en: "What should the CNA do if they notice the IV bag is empty?",
                text_es: "¿Qué debe hacer el CNA si nota que la bolsa de IV está vacía?",
                options_en: ["Try to refill it", "Notify the nurse immediately", "Turn off the machine yourself", "Take the needle out"],
                options_es: ["Intentar rellenarla", "Notificar a la enfermera de inmediato", "Apagar la máquina usted mismo", "Quitar la aguja"],
                correct: 1,
                reason_en: "Ensuring the IV line functions correctly is the nurse's responsibility; the CNA reports issues.",
                reason_es: "Asegurar que la vía IV funcione es responsabilidad de la enfermera; el CNA informa problemas."
            },
            // 23. Mental Health - Substance Abuse
            {
                text_en: "Signs of alcohol withdrawal in a resident may include:",
                text_es: "Los signos de abstinencia de alcohol en un residente pueden incluir:",
                options_en: ["Extreme sleepiness", "Tremors, sweating, and agitation", "Increased appetite", "Better vision"],
                options_es: ["Extrema somnolencia", "Temblores, sudoración y agitación", "Aumento del apetito", "Mejor visión"],
                correct: 1,
                reason_en: "Withdrawal is a dangerous medical condition that needs monitoring.",
                reason_es: "La abstinencia es una condición médica peligrosa que necesita vigilancia."
            },
            // 24. Advanced Protocols - Post-Surgical Care
            {
                text_en: "The 'Incentive Spirometer' is used after surgery to:",
                text_es: "El 'Incentivador Respiratorio' se usa tras la cirugía para:",
                options_en: ["Measure blood pressure", "Help expand the lungs and prevent pneumonia", "Digest food", "Exercise the legs"],
                options_es: ["Medir la presión arterial", "Ayudar a expandir los pulmones y prevenir neumonía", "Digerir la comida", "Ejercitar las piernas"],
                correct: 1,
                reason_en: "Deep breathing exercises are critical for post-operative recovery.",
                reason_es: "Los ejercicios de respiración profunda son críticos para la recuperación postoperatoria."
            },
            {
                text_en: "Sequential Compression Devices (SCDs) are used on the legs to:",
                text_es: "Los Dispositivos de Compresión Secuencial (SCD) se usan en las piernas para:",
                options_en: ["Help the resident walk", "Prevent blood clots (Deep Vein Thrombosis)", "Make the legs stronger", "Keep the legs warm"],
                options_es: ["Ayudar al residente a caminar", "Prevenir coágulos de sangre (Trombosis Venosa Profunda)", "Fortalecer las piernas", "Mantener las piernas calientes"],
                correct: 1,
                reason_en: "SCDs improve circulation by periodically squeezing the legs.",
                reason_es: "Los SCD mejoran la circulación apretando periódicamente las piernas."
            },
            // 25. Mental Health - Burnout prevention for CNAs
            {
                text_en: "CNA burnout is characterized by:",
                text_es: "El 'burnout' del CNA se caracteriza por:",
                options_en: ["High energy", "Emotional exhaustion and feeling overwhelmed", "Loving the job too much", "Getting a raise"],
                options_es: ["Mucha energía", "Agotamiento emocional y sentirse abrumado", "Amar demasiado el trabajo", "Recibir un aumento"],
                correct: 1,
                reason_en: "Self-care and support are necessary to manage the stress of caregiving.",
                reason_es: "El autocuidado y apoyo son necesarios para manejar el estrés de cuidar a otros."
            },
            // 26. Advanced Protocols - Colostomy care
            {
                text_en: "When emptying a colostomy bag, the CNA should:",
                text_es: "Al vaciar una bolsa de colostomía, el CNA debe:",
                options_en: ["Use a clean container and record the amount and color of stool", "Throw the whole bag away every time", "Not wear gloves", "Only empty it once a week"],
                options_es: ["Usar un contenedor limpio y registrar la cantidad y color de las heces", "Tirar toda la bolsa cada vez", "No usar guantes", "Solo vaciarla una vez por semana"],
                correct: 0,
                reason_en: "Stool characteristics provide information about the resident's digestive health.",
                reason_es: "Las características de las heces dan información sobre la salud digestiva del residente."
            },
            // 27. Mental Health - Hoarding
            {
                text_en: "Hoarding behavior in a resident should be handled by:",
                text_es: "El comportamiento de acumulación en un residente manejarse:",
                options_en: ["Throwing everything away when they are sleeping", "Consulting with the care team and slowly addressing safety hazards", "Yelling at the resident", "Ignoring it"],
                options_es: ["Tirando todo mientras duermen", "Consultando con el equipo de cuidado y tratando riesgos de seguridad poco a poco", "Gritando al residente", "Ignorándolo"],
                correct: 1,
                reason_en: "Abruptly removing items can cause extreme distress.",
                reason_es: "Quitar artículos de forma abrupta puede causar una angustia extrema."
            },
            // 28. Advanced Protocols - Traqueostomy
            {
                text_en: "A tracheostomy is a surgically created opening in the:",
                text_es: "Una traqueostomía es una abertura creada quirúrgicamente en el/la:",
                options_en: ["Stomach", "Neck (into the trachea)", "Chest", "Skull"],
                options_es: ["Estómago", "Cuello (hacia la tráquea)", "Pecho", "Cráneo"],
                correct: 1,
                reason_en: "A tracheostomy provides an alternative airway for breathing.",
                reason_es: "Una traqueostomía provee una vía respiratoria alternativa."
            },
            {
                text_en: "Can a CNA perform tracheostomy suctioning?",
                text_es: "¿Puede un CNA realizar succión de traqueostomía?",
                options_en: ["Yes", "No, it is a sterile procedure performed by a nurse", "Only if the nurse is busy", "If the resident asks"],
                options_es: ["Sí", "No, es un proceso estéril realizado por una enfermera", "Solo si la enfermera está ocupada", "Si el residente lo pide"],
                correct: 1,
                reason_en: "CNAs may perform oral suctioning but not tracheostomy suctioning.",
                reason_es: "Los CNAs pueden hacer succión oral pero no succión de traqueostomía."
            },
            // 29. Mental Health - Sun Exposure/SAD
            {
                text_en: "Seasonal Affective Disorder (SAD) is a type of depression related to:",
                text_es: "El Trastorno Afectivo Estacional (TAE) es un tipo de depresión relacionada con:",
                options_en: ["Changes in seasons and lack of sunlight", "Eating too much", "Broken bones", "Allergies"],
                options_es: ["Cambios en las estaciones y falta de luz solar", "Comer demasiado", "Huesos rotos", "Alergias"],
                correct: 0,
                reason_en: "Light therapy is often used to treat SAD.",
                reason_es: "La terapia de luz suele usarse para tratar el TAE."
            },
            // 30. Advanced Protocols - Pain scale
            {
                text_en: "When a resident says their pain is a '5' on a scale of 0 to 10, the CNA should:",
                text_es: "Cuando un residente dice que su dolor es un '5' en escala de 0 a 10, el CNA debe:",
                options_en: ["Tell them it's not that bad", "Report it to the nurse with the exact number", "Wait for it to become a 10", "Ignore it"],
                options_es: ["Decirles que no es tan malo", "Informar a la enfermera con el número exacto", "Esperar a que llegue a 10", "Ignorarlo"],
                correct: 1,
                reason_en: "Pain is subjective, and the resident's report is the best indicator of their status.",
                reason_es: "El dolor es subjetivo, y lo que dice el residente es el mejor indicador de su estado."
            },
            // 31. Mental Health - Validation
            {
                text_en: "A confused resident is looking for their mother, who died years ago. How should the CNA respond using Validation Therapy?",
                text_es: "Un residente confundido busca a su madre, que murió hace años. ¿Cómo debe responder el CNA usando Terapia de Validación?",
                options_en: ["'Your mother is dead, remember?'", "'Tell me about your mother; she sounds like a wonderful person.'", "'You're being silly, go back to your room.'", "Ignore the resident."],
                options_es: ["'Su madre está muerta, ¿recuerda?'", "'Cuénteme de su madre; parece una persona maravillosa.'", "'Está siendo tonto, vuelva a su cuarto.'", "Ignorar al residente."],
                correct: 1,
                reason_en: "Validation therapy focuses on the emotions behind the resident's words rather than the facts.",
                reason_es: "La terapia de validación se enfoca en las emociones tras las palabras del residente más que en los hechos."
            },
            // 32. Advanced Protocols - Hospice
            {
                text_en: "Hospice care is provided for residents who:",
                text_es: "El cuidado de Hospicio se brinda a residentes que:",
                options_en: ["Are expected to recover quickly", "Have a terminal illness with 6 months or less to live", "Only need help with exercise", "Are having a baby"],
                options_es: ["Se espera que se recuperen pronto", "Tienen enfermedad terminal con 6 meses o menos de vida", "Solo necesitan ayuda con ejercicio", "Van a tener un bebé"],
                correct: 1,
                reason_en: "Hospice focuses on comfort and quality of life rather than curing the illness.",
                reason_es: "El hospicio se enfoca en la comodidad y calidad de vida más que en curar la enfermedad."
            },
            // 33. Mental Health - Denial
            {
                text_en: "Denial is a defense mechanism where a person:",
                text_es: "La negación es un mecanismo de defensa donde una persona:",
                options_en: ["Refuses to accept reality", "Blames everyone else", "Forgets everything", "Is always happy"],
                options_es: ["Se niega a aceptar la realidad", "Culpa a todos los demás", "Olvida todo", "Siempre está feliz"],
                correct: 0,
                reason_en: "Denial helps a person protect themselves from overwhelming emotions initially.",
                reason_es: "La negación ayuda a protegerse de emociones abrumadoras inicialmente."
            },
            // 34. Advanced Protocols - DNR
            {
                text_en: "What does 'DNR' stand for?",
                text_es: "¿Qué significa 'DNR'?",
                options_en: ["Do Not Resuscitate", "Daily Nursing Report", "Do Not Rest", "Doctors Nursing Reserve"],
                options_es: ["No Resucitar (Do Not Resuscitate)", "Informe Diario de Enfermería", "No Descansar", "Reserva de Enfermería de Médicos"],
                correct: 0,
                reason_en: "A DNR order means that if the resident's heart stops, CPR should not be started.",
                reason_es: "Una orden de DNR significa que si el corazón se detiene, no debe iniciarse RCP."
            },
            // 35. Mental Health - Regression
            {
                text_en: "Regression is a defense mechanism where an adult:",
                text_es: "La regresión es un mecanismo de defensa donde un adulto:",
                options_en: ["Acts like a child", "Becomes very smart", "Learns a new language", "Exercises more"],
                options_es: ["Actúa como un niño", "Se vuelve muy inteligente", "Aprende un idioma nuevo", "Se ejercita más"],
                correct: 0,
                reason_en: "People may regress to an earlier stage of development when under extreme stress.",
                reason_es: "Las personas pueden regresar a una etapa previa del desarrollo bajo estrés extremo."
            },
            // 36. Advanced Protocols - Emesis
            {
                text_en: "Emesis is the medical term for:",
                text_es: "Emesis es el término médico para:",
                options_en: ["Sweating", "Vomiting", "Urination", "Coughing"],
                options_es: ["Sudoración", "Vómito", "Micción", "Tos"],
                correct: 1,
                reason_en: "The CNA should record the amount, color, and consistency of emesis.",
                reason_es: "El CNA debe registrar cantidad, color y consistencia de la emesis."
            },
            // 37. Mental Health - Delirium
            {
                text_en: "Delirium is different from Dementia because Delirium is:",
                text_es: "El Delirio es diferente de la Demencia porque el Delirio es:",
                options_en: ["Permanent", "A sudden/temporary state of confusion", "Normal aging", "Only in children"],
                options_es: ["Permanente", "Un estado repentino/temporal de confusión", "Envejecimiento normal", "Solo en niños"],
                correct: 1,
                reason_en: "Delirium often has a treatable physical cause, such as an infection or medication reaction.",
                reason_es: "El delirio suele tener una causa física tratable, como infección o reacción a medicinas."
            },
            // 38. Advanced Protocols - Body Posture
            {
                text_en: "What is the 'Prone' position?",
                text_es: "¿Qué es la posición 'Prona'?",
                options_en: ["Lying on the back", "Lying face down (on the stomach)", "Sitting at 90 degrees", "Lying on the side"],
                options_es: ["Acostado de espaldas", "Acostado boca abajo (sobre el estómago)", "Sentado a 90 grados", "Acostado de lado"],
                correct: 1,
                reason_en: "The prone position is used less frequently in elderly care but can be used for specific procedures.",
                reason_es: "La posición prona se usa menos en ancianos pero sirve para procesos específicos."
            },
            // 39. Mental Health - Intellectual Disability
            {
                text_en: "Caring for a resident with an Intellectual Disability (ID) requires the CNA to:",
                text_es: "Cuidar a un residente con Discapacidad Intelectual requiere que el CNA:",
                options_en: ["Treat them like a child", "Focus on the resident's abilities and provide simple, clear instructions", "Ignore their preferences", "Shout at them"],
                options_es: ["Tratarlos como niños", "Enfocarse en las habilidades del residente y dar instrucciones claras y simples", "Ignorar sus preferencias", "Gritarles"],
                correct: 1,
                reason_en: "Every resident deserves respect and care tailored to their individual needs.",
                reason_es: "Cada residente merece respeto y cuidado adaptado a sus necesidades."
            },
            // 40. Advanced Protocols - Vital Signs (Temperature)
            {
                text_en: "Which temperature taking method is considered the most accurate ('gold standard')?",
                text_es: "¿Qué método de toma de temperatura se considera el más preciso ('estándar de oro')?",
                options_en: ["Axillary (armpit)", "Oral", "Rectal", "Temporal (forehead)"],
                options_es: ["Axilar (axila)", "Oral", "Rectal", "Temporal (frente)"],
                correct: 2,
                reason_en: "Rectal temperature is the closest to core body temperature.",
                reason_es: "La temperatura rectal es la más cercana a la temperatura corporal central."
            },
            // 41. Mental Health - Panic Attack
            {
                text_en: "A resident is having a panic attack. What should the CNA's priority be?",
                text_es: "Un residente tiene un ataque de pánico. ¿Cuál debe ser la prioridad del CNA?",
                options_en: ["Give them a list of things to do", "Ensure they are safe and encourage slow, deep breaths", "Tell them they are overreacting", "Call the family"],
                options_es: ["Darles una lista de cosas por hacer", "Asegurar que estén a salvo y animar a respirar lento y profundo", "Decirles que exageran", "Llamar a la familia"],
                correct: 1,
                reason_en: "Providing a sense of safety is key during a panic attack.",
                reason_es: "Proveer sentido de seguridad es clave durante un ataque de pánico."
            },
            // 42. Advanced Protocols - Aspiration levels
            {
                text_en: "A resident is on 'Thickened Liquids'. The 'Nectar Thick' consistency is like:",
                text_es: "Un residente toma 'Líquidos Espesados'. La consistencia 'Espesura Néctar' es como:",
                options_en: ["Water", "Tomato juice or a thin milkshake", "Pudding", "A solid brick"],
                options_es: ["Agua", "Zumo de tomate o un batido fino", "Pudín", "Un ladrillo sólido"],
                correct: 1,
                reason_en: "Nectar thick is easily pourable but thicker than water.",
                reason_es: "El néctar se puede verter fácil pero es más espeso que el agua."
            },
            // 43. Mental Health - Bullying among residents
            {
                text_en: "A resident is making fun of and excluding another resident. The CNA's role is to:",
                text_es: "Un residente se burla y excluye a otro. El papel del CNA es:",
                options_en: ["Ignore it", "Report the bullying behavior to the charge nurse", "Laugh along", "Tell the excluded resident to leave the room"],
                options_es: ["Ignorarlo", "Informar de la conducta de acoso a la enfermera a cargo", "Reírse también", "Decir al residente excluido que se vaya"],
                correct: 1,
                reason_en: "Safety and emotional well-being are essential for all residents.",
                reason_es: "La seguridad y el bienestar emocional son esenciales para todos."
            },
            // 44. Advanced Protocols - Post-Mortem Dignity
            {
                text_en: "When moving the body of a deceased resident, the CNA should:",
                text_es: "Al mover el cuerpo de un residente fallecido, el CNA debe:",
                options_en: ["Talk loudly and joke", "Treat the body as if the person were still alive and aware", "Be rough", "Not worry about privacy"],
                options_es: ["Hablar alto y bromear", "Tratar el cuerpo como si la persona aún viviera y estuviera consciente", "Ser brusco", "No preocuparse por la privacidad"],
                correct: 1,
                reason_en: "Respectful treatment honors the resident and provides comfort to the family.",
                reason_es: "El trato respetuoso honra al residente y da consuelo a la familia."
            },
            // 45. Mental Health - Sun Exposure
            {
                text_en: "Sunlight exposure helps the body produce which vitamin?",
                text_es: "La exposición al sol ayuda al cuerpo a producir ¿qué vitamina?",
                options_en: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin K"],
                options_es: ["Vitamina C", "Vitamina D", "Vitamina B12", "Vitamina K"],
                correct: 1,
                reason_en: "Vitamin D is essential for bone health and mood regulation.",
                reason_es: "La vitamina D es esencial para la salud ósea y regular el ánimo."
            },
            // 46. Advanced Protocols - Tube feeding complications
            {
                text_en: "A resident with a feeding tube starts vomiting. The CNA should FIRST:",
                text_es: "Un residente con sonda empieza a vomitar. El CNA debe PRIMERO:",
                options_en: ["Clean up the mess", "Stop the feeding (if possible) and notify the nurse immediately", "Give them some water", "Lay them flat"],
                options_es: ["Limpiar el desastre", "Parar la alimentación (si es posible) y avisar a la enfermera ya", "Darles agua", "Acostarlos planos"],
                correct: 1,
                reason_en: "Vomiting during tube feeding is a high risk for aspiration.",
                reason_es: "Vomitar durante la sonda es un alto riesgo de aspiración."
            },
            // 47. Mental Health - Spiritual needs
            {
                text_en: "If a resident asks to see a priest or religious leader, the CNA should:",
                text_es: "Si un residente pide ver a un cura o líder religioso, el CNA debe:",
                options_en: ["Tell them they don't need religion", "Notify the nurse so the request can be fulfilled", "Offer their own religious beliefs", "Ignore the request"],
                options_es: ["Decirles que no necesitan religión", "Avisar a la enfermera para que se cumpla el pedido", "Ofrecer sus propias creencias", "Ignorar el pedido"],
                correct: 1,
                reason_en: "Supporting the resident's spiritual needs is part of holistic care.",
                reason_es: "Apoyar las necesidades espirituales es parte del cuidado integral."
            },
            // 48. Advanced Protocols - Abbreviation (q.i.d)
            {
                text_en: "The medical abbreviation 'q.i.d' means:",
                text_es: "La abreviatura médica 'q.i.d' significa:",
                options_en: ["Every day", "Twice a day", "Three times a day", "Four times a day"],
                options_es: ["Cada día", "Dos veces al día", "Tres veces al día", "Cuatro veces al día"],
                correct: 3,
                reason_en: "q.i.d stands for 'quater in die'.",
                reason_es: "q.i.d significa 'quater in die'."
            },
            // 49. Mental Health - Phobias
            {
                text_en: "What is 'Claustrophobia'?",
                text_es: "¿Qué es la 'Claustrofobia'?",
                options_en: ["Fear of spiders", "Fear of enclosed spaces", "Fear of heights", "Fear of water"],
                options_es: ["Miedo a las arañas", "Miedo a espacios cerrados", "Miedo a las alturas", "Miedo al agua"],
                correct: 1,
                reason_en: "Claustrophobia can be triggered by elevators or small rooms.",
                reason_es: "La claustrofobia puede activarse por ascensores o cuartos pequeños."
            },
            // 50. Advanced Protocols - BP cuff
            {
                text_en: "A blood pressure cuff that is too small for a resident's arm will likely give a result that is:",
                text_es: "Un manguito de presión arterial muy pequeño dará un resultado que probablemente sea:",
                options_en: ["Too low", "Too high", "Very accurate", "The same as a larger cuff"],
                options_es: ["Muy bajo", "Muy alto", "Muy preciso", "Igual que un manguito mayor"],
                correct: 1,
                reason_en: "Improperly sized cuffs are a common source of measurement error.",
                reason_es: "Manguitos de tamaño incorrecto son fuente común de error en la medida."
            },
            // 51. Mental Health - Caregiving Stress
            {
                text_en: "To manage the stress of working as a CNA, it is important to:",
                text_es: "Para manejar el estrés de trabajar como CNA, es importante:",
                options_en: ["Work 80 hours a week", "Practice self-care and ask for help when needed", "Never take breaks", "Keep all feelings inside"],
                options_es: ["Trabajar 80 horas por semana", "Practicar autocuidado y pedir ayuda si hace falta", "Nunca tomar descansos", "Guardar todo sentimiento dentro"],
                correct: 1,
                reason_en: "CNAs who take care of themselves are better able to take care of others.",
                reason_es: "Los CNAs que se cuidan a sí mismos pueden cuidar mejor a otros."
            },
            // 52. Advanced Protocols - Range of Motion (Active)
            {
                text_en: "'Active' Range of Motion (AROM) exercises are performed by:",
                text_es: "Los ejercicios de Rango de Movimiento 'Activo' (AROM) son realizados por:",
                options_en: ["The resident themselves", "The CNA moving the resident's limb", "A machine", "The family"],
                options_es: ["El residente mismo", "El CNA moviendo el miembro del residente", "Una máquina", "La familia"],
                correct: 0,
                reason_en: "AROM helps maintain muscle strength and joint flexibility.",
                reason_es: "El AROM ayuda a mantener fuerza muscular y flexibilidad articular."
            },
            // 53. Mental Health - PTSD
            {
                text_en: "PTSD (Post-Traumatic Stress Disorder) can be triggered by:",
                text_es: "El TEPT (Trastorno de Estrés Postraumático) puede activarse por:",
                options_en: ["Loud noises, specific smells, or memories of a traumatic event", "Eating too much", "Watching a movie", "Listening to music"],
                options_es: ["Ruidos fuertes, olores o memorias de un evento traumático", "Comer demasiado", "Ver una película", "Escuchar música"],
                correct: 0,
                reason_en: "Many elderly residents may have PTSD from experiences like war or earlier life trauma.",
                reason_es: "Muchos ancianos pueden tener TEPT por guerras o traumas de vida temprana."
            },
            // 54. Advanced Protocols - Resident Rights (Dignity)
            {
                text_en: "Checking a resident's body for 'Pressure Sores' should always be done:",
                text_es: "Revisar si un residente tiene 'Escaras' (Pressure Sores) debe hacerse siempre:",
                options_en: ["In the hallway", "In private, protecting the resident's modesty", "With other residents watching", "While the resident is eating"],
                options_es: ["En el pasillo", "En privado, protegiendo el pudor del residente", "Con otros residentes mirando", "Mientras el residente come"],
                correct: 1,
                reason_en: "Respecting the resident's dignity is a key ethical standard for all medical professionals.",
                reason_es: "Respetar la dignidad del residente es un estándar ético clave para todo profesional médico."
            },
            // 55. Mental Health - Sundowner's Lighting
            {
                text_en: "Which type of lighting is best for a resident experiencing sundowning?",
                text_es: "¿Qué tipo de iluminación es mejor para un residente con síndrome del ocaso?",
                options_en: ["Strobe lights", "Soft, adequate lighting that minimizes shadows", "Pitch darkness", "Flashlights"],
                options_es: ["Luces de discoteca", "Iluminación suave y adecuada que minimice las sombras", "Oscuridad total", "Linternas"],
                correct: 1,
                reason_en: "Shadows can be confusing and scary for a resident with dementia.",
                reason_es: "Las sombras pueden ser confusas y dar miedo a un residente con demencia."
            },
            // 56. Advanced Protocols - Mouth care for the dying
            {
                text_en: "Mouth care for an unconscious or dying resident should be performed at least every:",
                text_es: "El cuidado bucal de un residente inconsciente o moribundo debe hacerse al menos cada:",
                options_en: ["2 hours", "4 hours", "Shift change", "Day"],
                options_es: ["2 horas", "4 horas", "Cambio de turno", "Día"],
                correct: 0,
                reason_en: "Mouths can become very dry and uncomfortable due to mouth breathing and medication.",
                reason_es: "La boca se reseca y molesta mucho por respirar por ella y por las medicinas."
            },
            // 57. Mental Health - Panic attack breathing
            {
                text_en: "When a resident is hyperventilating during a panic attack, the CNA should encourage them to breathe into a:",
                text_es: "Cuando un residente se hiperventila en un ataque de pánico, el CNA debe animarle a respirar en:",
                options_en: ["Plastic bag", "Paper bag (if ordered by the nurse) or just follow a slow rhythm", "Cloth towel", "Bucket"],
                options_es: ["Bolsa de plástico", "Bolsa de papel (si la enfermera lo ordena) o solo seguir un ritmo lento", "Toalla de tela", "Cubo"],
                correct: 1,
                reason_en: "Breathing into a paper bag helps increase CO2 levels in the blood, which can calm hyperventilation.",
                reason_es: "Respirar en bolsa de papel sube el CO2 en sangre, lo que calma la hiperventilación."
            },
            // 58. Advanced Protocols - Fall prevention
            {
                text_en: "The best way to prevent falls when transferring a resident is to use a:",
                text_es: "La mejor forma de prevenir caídas al trasladar a un residente es usar un/una:",
                options_en: ["Wheelchair", "Gait Belt", "Stretcher", "Cane"],
                options_es: ["Silla de ruedas", "Cinturón de marcha (Gait Belt)", "Camilla", "Bastón"],
                correct: 1,
                reason_en: "A gait belt provides a secure way for the CNA to support the resident's weight.",
                reason_es: "Un cinturón de marcha da una forma segura al CNA para sostener el peso del residente."
            },
            // 59. Mental Health - Reminiscence Therapy
            {
                text_en: "What is 'Reminiscence Therapy'?",
                text_es: "¿Qué es la 'Terapia de Reminiscencia'?",
                options_en: ["Learning a new skill", "Encouraging residents to talk about past experiences and memories", "Forgetting the past", "Exercising the legs"],
                options_es: ["Aprender una nueva habilidad", "Animar a los residentes a hablar de experiencias y memorias pasadas", "Olvidar el pasado", "Ejercitar las piernas"],
                correct: 1,
                reason_en: "Reminiscence therapy helps residents feel valued and connected to their own identity.",
                reason_es: "La terapia de reminiscencia les ayuda a sentirse valorados y conectados con su propia identidad."
            },
            // 60. Advanced Protocols - Hand Hygiene
            {
                text_en: "The most important part of handwashing is:",
                text_es: "La parte más importante del lavado de manos es:",
                options_en: ["The type of soap", "Friction for at least 20 seconds", "The temperature of the water", "The brand of paper towels"],
                options_es: ["El tipo de jabón", "Fricción por al menos 20 segundos", "La temperatura del agua", "La marca de toallitas de papel"],
                correct: 1,
                reason_en: "Friction physically removes pathogens from the skin.",
                reason_es: "La fricción elimina físicamente los patógenos de la piel."
            }
        ]
    },
    {
        name: "Simulacro Mixto 5",
        questions: [
            // 1. Specialized Care - Oxygen
            {
                text_en: "When a resident is receiving oxygen therapy, the CNA should ensure that:",
                text_es: "Cuando un residente recibe terapia de oxígeno, el CNA debe asegurarse de que:",
                options_en: ["The tubing is kinked", "The flow rate matches the nurse's order", "The resident is smoking", "The oxygen tank is empty"],
                options_es: ["El tubo esté doblado", "La tasa de flujo coincida con la orden de la enfermera", "El residente esté fumando", "El tanque de oxígeno esté vacío"],
                correct: 1,
                reason_en: "Oxygen is a medication; only the nurse or doctor should change the flow rate, but the CNA monitors for safety.",
                reason_es: "El oxígeno es un medicamento; solo la enfermera o el médico deben cambiar el flujo, pero el CNA vigila la seguridad."
            },
            {
                text_en: "Which of the following is a safety risk around oxygen?",
                text_es: "¿Cuál de los siguientes es un riesgo de seguridad cerca del oxígeno?",
                options_en: ["Using an electric razor", "Drinking water", "Reading a book", "Walking in the hallway"],
                options_es: ["Usar una afeitadora eléctrica", "Beber agua", "Leer un libro", "Caminar por el pasillo"],
                correct: 0,
                reason_en: "Electric razors can spark, which is dangerous in an oxygen-rich environment (fire hazard).",
                reason_es: "Las afeitadoras eléctricas pueden soltar chispas, lo cual es peligroso en un ambiente con oxígeno (riesgo de incendio)."
            },
            // 2. Legal / Ethical - HIPAA
            {
                text_en: "HIPAA is a federal law that protects:",
                text_es: "HIPAA es una ley federal que protege:",
                options_en: ["The facility's profits", "The resident's privacy and health information", "The CNA's right to take breaks", "The doctor's schedule"],
                options_es: ["Las ganancias de la instalación", "La privacidad e información de salud del residente", "El derecho del CNA a tomar descansos", "El horario del médico"],
                correct: 1,
                reason_en: "HIPAA ensures that personal health information (PHI) remains confidential.",
                reason_es: "HIPAA asegura que la información de salud personal (PHI) se mantenga confidencial."
            },
            {
                text_en: "A CNA sees a coworker posting a picture of a resident on social media. This is a violation of:",
                text_es: "Un CNA ve a un compañero publicando una foto de un residente en redes sociales. Esto viola:",
                options_en: ["The dress code", "HIPAA/Resident Privacy", "Nothing, it's a nice picture", "The cafeteria rules"],
                options_es: ["El código de vestimenta", "HIPAA/Privacidad del Residente", "Nada, es una foto bonita", "Las reglas de la cafetería"],
                correct: 1,
                reason_en: "Residents have a strict right to privacy, and social media posts are major violations.",
                reason_es: "Los residentes tienen un derecho estricto a la privacidad; las redes sociales son infracciones graves."
            },
            // 3. Nutrition & Hydration
            {
                text_en: "A resident is on a 'Fluid Restriction'. The CNA should:",
                text_es: "Un residente tiene 'Restricción de Líquidos'. El CNA debe:",
                options_en: ["Give them as much water as they want", "Keep an accurate record of all fluids taken and notify the nurse", "Only give them soda", "Ignore the restriction if the resident is thirsty"],
                options_es: ["Darles tanta agua como quieran", "Llevar un registro exacto de los líquidos ingeridos e informar a la enfermera", "Solo darles refresco", "Ignorar la restricción si el residente tiene sed"],
                correct: 1,
                reason_en: "Fluid restrictions are often for heart or kidney conditions; monitoring Intake & Output (I&O) is critical.",
                reason_es: "Las restricciones se deben a problemas de corazón o riñón; vigilar la Ingesta y Eliminación (I&O) es vital."
            },
            {
                text_en: "1 ounce (oz) is equal to how many milliliters (mL)?",
                text_es: "¿1 onza (oz) equivale a cuántos mililitros (mL)?",
                options_en: ["10 mL", "30 mL", "50 mL", "100 mL"],
                options_es: ["10 mL", "30 mL", "50 mL", "100 mL"],
                correct: 1,
                reason_en: "Standard medical conversion: 1 oz = 30 mL.",
                reason_es: "Conversión médica estándar: 1 oz = 30 mL."
            },
            // 4. Specialized Care - Dialysis
            {
                text_en: "A resident with Kidney Failure requires 'Dialysis' to:",
                text_es: "Un residente con Insuficiencia Renal requiere 'Diálisis' para:",
                options_en: ["Help them sleep", "Remove waste products and excess water from the blood", "Cure their cancer", "Improve their vision"],
                options_es: ["Ayudarles a dormir", "Eliminar productos de desecho y exceso de agua de la sangre", "Curar su cáncer", "Mejorar su visión"],
                correct: 1,
                reason_en: "When kidneys fail, dialysis mechanically cleans the blood.",
                reason_es: "Cuando los riñones fallan, la diálisis limpia mecánicamente la sangre."
            },
            {
                text_en: "Regarding a resident's dialysis 'Shunt' or 'Fistula' in their arm, the CNA should NOT:",
                text_es: "Respecto a la 'Derivación' o 'Fístula' de diálisis en el brazo del residente, el CNA NO debe:",
                options_en: ["Check for skin color", "Take blood pressure on that arm", "Report if it's bleeding", "Help the resident wash their arm"],
                options_es: ["Revisar el color de la piel", "Tomar la presión arterial en ese brazo", "Informar si sangra", "Ayudar al residente a lavar su brazo"],
                correct: 1,
                reason_en: "Taking blood pressure on a dialysis arm can damage the fistula or shunt.",
                reason_es: "Tomar la presión en un brazo de diálisis puede dañar la fístula o derivación."
            },
            // 5. Legal / Ethical - Negligence
            {
                text_en: "Leaving a resident in a wet bed for hours, leading to a pressure ulcer, is an example of:",
                text_es: "Dejar a un residente en una cama mojada por horas, causando una úlcera por presión, es ejemplo de:",
                options_en: ["Good care", "Negligence", "Assault", "Slander"],
                options_es: ["Buen cuidado", "Negligencia", "Agresión", "Calumnia"],
                correct: 1,
                reason_en: "Negligence is the failure to provide proper care that results in harm.",
                reason_es: "La negligencia es no brindar el cuidado adecuado, lo que resulta en daño."
            },
            {
                text_en: "Which of the following is an example of 'Verbal Abuse'?",
                text_es: "¿Cuál de los siguientes es un ejemplo de 'Abuso Verbal'?",
                options_en: ["Saying 'Good morning'", "Calling a resident 'lazy' or 'stupid'", "Asking if they need help", "Telling a joke"],
                options_es: ["Decir 'Buenos días'", "Llamar al residente 'perezoso' o 'estúpido'", "Preguntar si necesita ayuda", "Contar un chiste"],
                correct: 1,
                reason_en: "Using insults or threats is verbal abuse and must be reported.",
                reason_es: "Usar insultos o amenazas es abuso verbal y debe ser reportado."
            },
            // 6. Personal Care - Shaving
            {
                text_en: "When shaving a resident's face with a disposable razor, you should shave:",
                text_es: "Al afeitar la cara de un residente con una cuchilla desechable, debe afeitar:",
                options_en: ["Against the direction of hair growth", "In the direction of hair growth", "Sideways", "None of the above"],
                options_es: ["En contra de la dirección del vello", "En la dirección del crecimiento del vello", "De lado", "Ninguna de las anteriores"],
                correct: 1,
                reason_en: "Shaving in the direction of hair growth prevents irritation and cuts.",
                reason_es: "Afeitar en la dirección del crecimiento previene irritación y cortes."
            },
            {
                text_en: "Before shaving a resident, the CNA should check if the resident is taking:",
                text_es: "Antes de afeitar a un residente, el CNA debe revisar si el residente toma:",
                options_en: ["Vitamins", "Anticoagulants (blood thinners)", "Water", "Aspirin for a headache one time"],
                options_es: ["Vitaminas", "Anticoagulantes (diluyentes de sangre)", "Agua", "Aspirina para el dolor una vez"],
                correct: 1,
                reason_en: "Residents on anticoagulants bleed more easily; using an electric razor is safer for them.",
                reason_es: "Residentes con anticoagulantes sangran más fácil; usar afeitadora eléctrica es más seguro."
            },
            // 7. Specialized Care - TED Hose
            {
                text_en: "Anti-Embolism stockings (TED hose) are used to:",
                text_es: "Las medias anti-embolia (TED hose) se usan para:",
                options_en: ["Keep the resident's feet warm", "Increase circulation and prevent blood clots", "Make the resident look fashionable", "Hide dry skin"],
                options_es: ["Mantener calientes los pies", "Aumentar la circulación y prevenir coágulos", "Hacer que el residente luzca a la moda", "Esconder la piel seca"],
                correct: 1,
                reason_en: "TED hose apply pressure to the legs to prevent Deep Vein Thrombosis (DVT).",
                reason_es: "Las medias TED aplican presión en las piernas para prevenir la Trombosis Venosa Profunda (TVP)."
            },
            {
                text_en: "TED hose should be applied:",
                text_es: "Las medias TED deben ponerse:",
                options_en: ["After the resident has been walking for an hour", "In the morning, before the resident gets out of bed", "Right before bed", "Only on weekends"],
                options_es: ["Después de que el residente haya caminado una hora", "En la mañana, antes de que el residente se levante", "Justo antes de dormir", "Solo fines de semana"],
                correct: 1,
                reason_en: "Legs are least swollen in the morning, making application easier and more effective.",
                reason_es: "Las piernas están menos hinchadas por la mañana, facilitando su aplicación y efectividad."
            },
            // 8. Legal / Ethical - Resident Rights
            {
                text_en: "A resident wants to open their own mail. The CNA should:",
                text_es: "Un residente quiere abrir su propio correo. El CNA debe:",
                options_en: ["Open it for them anyway", "Let the resident open their own mail (Resident Right)", "Throw the mail away", "Show the mail to other residents"],
                options_es: ["Abrirlo por ellos de todos modos", "Dejar que el residente abra su propio correo (Derecho del Residente)", "Tirar el correo", "Mostrar el correo a otros residentes"],
                correct: 1,
                reason_en: "Residents have the right to privacy, including sending and receiving unopened mail.",
                reason_es: "Los residentes tienen derecho a la privacidad, incluyendo recibir su correo sin abrir."
            },
            {
                text_en: "The 'Ombudsman' is a person who:",
                text_es: "El 'Ombudsman' (Defensor del Pueblo) es una persona que:",
                options_en: ["Works for the facility's administration", "Acts as an independent advocate for residents' rights", "Is a type of doctor", "Cleans the facility"],
                options_es: ["Trabaja para la administración de la instalación", "Actúa como defensor independiente de los derechos del residente", "Es un tipo de médico", "Limpia la instalación"],
                correct: 1,
                reason_en: "An ombudsman investigates complaints and helps resolve conflicts between residents and the facility.",
                reason_es: "Un ombudsman investiga quejas y ayuda a resolver conflictos entre residentes y la institución."
            },
            // 9. Infection Control - Sharps
            {
                text_en: "Where should a used razor or needle be disposed of?",
                text_es: "¿Dónde debe desecharse una cuchilla o aguja usada?",
                options_en: ["In the regular trash can", "In a puncture-proof 'Sharps' container", "In the laundry bin", "Flushed down the toilet"],
                options_es: ["En el basurero normal", "En un contenedor de 'Objetos Punzantes' resistente a pinchazos", "En el cesto de la lavandería", "Tirarlo por el inodoro"],
                correct: 1,
                reason_en: "Sharps containers prevent accidental needle sticks and injury.",
                reason_es: "Los contenedores de objetos punzantes previenen pinchazos accidentales y lesiones."
            },
            // 10. Nutrition - Specialized Diets
            {
                text_en: "A 'Mechanical Soft' diet is for residents who:",
                text_es: "Una dieta 'Blanda Mecánica' es para residentes que:",
                options_en: ["Have trouble chewing or swallowing", "Want to lose weight", "Have a broken leg", "Are very smart"],
                options_es: ["Tienen problemas para masticar o tragar", "Quieren perder peso", "Tienen una pierna rota", "Son muy inteligentes"],
                correct: 0,
                reason_en: "Food is chopped, ground, or blended to make it easier to consume.",
                reason_es: "La comida se pica, muele o licúa para facilitar su consumo."
            },
            {
                text_en: "A resident on a 'Low Sodium' diet should avoid:",
                text_es: "Un residente con dieta 'Baja en Sodio' debe evitar:",
                options_en: ["Fresh vegetables", "Salt and processed/canned foods", "Distilled water", "Fruit juice"],
                options_es: ["Vegetales frescos", "Sal y comidas procesadas o enlatadas", "Agua destilada", "Zumo de frutas"],
                correct: 1,
                reason_en: "Sodium (salt) causes the body to hold onto water, which is bad for heart and kidney conditions.",
                reason_es: "El sodio (sal) hace retener agua, lo cual es malo para el corazón y riñones."
            },
            // 11. Specialized Care - Ostomy
            {
                text_en: "A 'Stoma' is:",
                text_es: "Un 'Estoma' es:",
                options_en: ["A type of medication", "An artificial opening in the body (usually on the abdomen)", "A bone in the foot", "A mental health condition"],
                options_es: ["Un tipo de medicina", "Una abertura artificial en el cuerpo (usualmente en el abdomen)", "Un hueso del pie", "Una condición de salud mental"],
                correct: 1,
                reason_en: "A stoma is created during surgery to allow for waste elimination.",
                reason_es: "Un estoma se crea por cirugía para permitir la eliminación de desechos."
            },
            {
                text_en: "Skin around a stoma should be:",
                text_es: "La piel alrededor de un estoma debe estar:",
                options_en: ["Red and bleeding", "Clean and dry", "Covered in stool", "Blue"],
                options_es: ["Roja y sangrando", "Limpia y seca", "Cubierta de heces", "Azul"],
                correct: 1,
                reason_en: "Maintaining skin integrity around the stoma is vital to prevent infection and breakdown.",
                reason_es: "Mantener la piel íntegra cerca del estoma es vital para prevenir infecciones."
            },
            // 12. Legal / Ethical - False Imprisonment
            {
                text_en: "Using a restraint to prevent a resident from leaving against their will even though there's no medical need is:",
                text_es: "Usar una sujeción para evitar que un residente se vaya contra su voluntad sin necesidad médica es:",
                options_en: ["Good teamwork", "False Imprisonment", "Helping the family", "Hospitality"],
                options_es: ["Buen trabajo en equipo", "Privación Ilegal de la Libertad", "Ayudar a la familia", "Hospitalidad"],
                correct: 1,
                reason_en: "Confining a person without legal authority or medical necessity is a crime.",
                reason_es: "Confinar a alguien sin autoridad legal o necesidad médica es un delito."
            },
            // 13. Communication - Cultural Sensitivity
            {
                text_en: "When caring for residents from different cultures, the CNA should:",
                text_es: "Al cuidar de residentes de culturas diferentes, el CNA debe:",
                options_en: ["Ignore their customs", "Respect their traditions and beliefs", "Force them to eat everything", "Tell them their culture is wrong"],
                options_es: ["Ignorar sus costumbres", "Respetar sus tradiciones y creencias", "Obligarles a comer de todo", "Decirles que su cultura está mal"],
                correct: 1,
                reason_en: "Cultural sensitivity is part of providing high-quality, patient-centered care.",
                reason_es: "La sensibilidad cultural es parte de brindar un cuidado de alta calidad centrado en el paciente."
            },
            // 14. Specialized Care - Prosthetics
            {
                text_en: "A prosthetic is:",
                text_es: "Una prótesis es:",
                options_en: ["An artificial replacement for a missing body part", "A type of hearing aid", "A pair of glasses", "A wheelchair"],
                options_es: ["Un reemplazo artificial de una parte del cuerpo faltante", "Un tipo de audífono", "Un par de gafas", "Una silla de ruedas"],
                correct: 0,
                reason_en: "Prosthetics help improve function and appearance for residents with limb loss.",
                reason_es: "Las prótesis mejoran la función y apariencia tras la pérdida de un miembro."
            },
            {
                text_en: "When handling a prosthetic eye, the CNA should:",
                text_es: "Al manipular un ojo protésico, el CNA debe:",
                options_en: ["Wash it with boiling water", "Wash it with mild soap and water according to the care plan", "Scrub it with a brush", "Use alcohol"],
                options_es: ["Lavarlo con agua hirviendo", "Lavarlo con jabón suave y agua según el plan de cuidado", "Hacerlo con un cepillo fuerte", "Usar alcohol"],
                correct: 1,
                reason_en: "Safe handling prevents damage to the delicate prosthetic.",
                reason_es: "El manejo seguro evita daños en la delicada prótesis."
            },
            // 15. Legal / Ethical - Resident Funds
            {
                text_en: "If a resident asks the CNA to keep their money for 'safe keeping', the CNA should:",
                text_es: "Si un residente pide al CNA que guarde su dinero para 'seguridad', el CNA debe:",
                options_en: ["Take it and put it in their own wallet", "Report it to the nurse and follow facility policy for resident finds", "Tell the resident to hide it under the pillow", "Give the money to other staff"],
                options_es: ["Tomarlo y ponerlo en su propia billetera", "Informar a la enfermera y seguir la política sobre fondos del residente", "Decir al residente que lo esconda bajo la almohada", "Dar el dinero a otros empleados"],
                correct: 1,
                reason_en: "CNAs should NEVER handle resident funds directly to avoid accusations of theft.",
                reason_es: "Los CNAs NUNCA deben manejar fondos de residentes para evitar acusaciones de robo."
            },
            // 16. Nutrition - Hydration (Dehydration)
            {
                text_en: "Which of the following is a sign of dehydration?",
                text_es: "¿Cuál de los siguientes es un signo de deshidratación?",
                options_en: ["Wet skin", "Dark, concentrated urine and dry mouth", "Pale yellow urine", "Frequent urination"],
                options_es: ["Piel húmeda", "Orina oscura y concentrada y boca seca", "Orina amarillo pálido", "Micción frecuente"],
                correct: 1,
                reason_en: "Dark urine and dry mucous membranes are classic indicators of lack of fluids.",
                reason_es: "La orina oscura y las membranas mucosas secas son indicadores clásicos de falta de líquidos."
            },
            // 17. Specialized Care - Cast Care
            {
                text_en: "When caring for a resident with a new plaster cast, it should be handled with:",
                text_es: "Al cuidar de un residente con un yeso nuevo, este debe manejarse con:",
                options_en: ["The fingertips", "The palms of the hands (to avoid indentations)", "Tongs", "Gloves only"],
                options_es: ["Las puntas de los dedos", "Las palmas de las manos (para evitar marcas/hendiduras)", "Pinzas", "Solo guantes"],
                correct: 1,
                reason_en: "Using fingertips on a wet cast can cause pressure points inside the cast.",
                reason_es: "Usar las yemas de los dedos en yeso húmedo puede crear puntos de presión internos."
            },
            {
                text_en: "CNA should report which of the following regarding a casted limb?",
                text_es: "¿Qué debe informar el CNA respecto a un miembro con yeso?",
                options_en: ["The resident is watching TV", "Cool, blue, or numb toes", "The cast matches the bedding", "The resident is eating an apple"],
                options_es: ["El residente ve TV", "Dedos fríos, azules o entumecidos", "El yeso combina con la cama", "El residente come una manzana"],
                correct: 1,
                reason_en: "These are signs of impaired circulation (emergency).",
                reason_es: "Son signos de circulación comprometida (emergencia)."
            },
            // 18. Legal / Ethical - Scope of Practice
            {
                text_en: "A nurse asks a CNA to give a resident a medication. The CNA should:",
                text_es: "Una enfermera pide a un CNA que dé una medicina. El CNA debe:",
                options_en: ["Do it immediately", "Refuse, as it is outside their scope of practice", "Ask another CNA to do it", "Only do it if the resident is nice"],
                options_es: ["Hacerlo de inmediato", "Negarse, ya que está fuera de su alcance de práctica", "Pedir a otro CNA que lo haga", "Solo si el residente es amable"],
                correct: 1,
                reason_en: "Giving medications is a licensed responsibility, not a CNA task.",
                reason_es: "Dar medicinas es responsabilidad de personal con licencia, no del CNA."
            },
            // 19. Specialized Care - Hearing Aids
            {
                text_en: "Before inserting a hearing aid, the CNA should ensure that:",
                text_es: "Antes de poner un audífono, el CNA debe asegurarse de que:",
                options_en: ["The volume is at maximum", "It is turned on and the battery is working", "The resident is sleeping", "It is covered in wax"],
                options_es: ["El volumen esté al máximo", "Esté encendido y la batería funcione", "El residente esté dormido", "Esté cubierto de cera"],
                correct: 1,
                reason_en: "Proper function is essential for communication.",
                reason_es: "El funcionamiento correcto es clave para la comunicación."
            },
            {
                text_en: "How should a hearing aid be cleaned?",
                text_es: "¿Cómo se debe limpiar un audífono?",
                options_en: ["Wipe with a soft cloth", "Wash in the sink", "Use bleach", "Submerge in alcohol"],
                options_es: ["Limpiar con un paño suave", "Lavar en el fregadero", "Usar lejía", "Sumergir en alcohol"],
                correct: 0,
                reason_en: "Water can damage the electronic components of a hearing aid.",
                reason_es: "El agua puede dañar los componentes electrónicos del audífono."
            },
            // 20. Legal / Ethical - Incident Reports
            {
                text_en: "An incident report is filled out when:",
                text_es: "Un informe de incidente se completa cuando:",
                options_en: ["A resident eats lunch", "An unexpected event occurs, like a fall or error", "The shift ends", "The CNA gets a new uniform"],
                options_es: ["Un residente almuerza", "Ocurre un evento inesperado, como caída o error", "Termina el turno", "El CNA recibe uniforme nuevo"],
                correct: 1,
                reason_en: "Incident reports help facilities track safety issues and improve care.",
                reason_es: "Los informes de incidentes ayudan a rastrear problemas y mejorar el cuidado."
            },
            // 21. Specialized Care - Vision Impairment
            {
                text_en: "When entering the room of a visually impaired resident, the CNA should:",
                text_es: "Al entrar al cuarto de un residente con problemas de vista, el CNA debe:",
                options_en: ["Sneak in quietly", "Knock and identify themselves immediately", "Tap the resident on the head", "Turn off all the lights"],
                options_es: ["Entrar en silencio", "Tocar e identificarse de inmediato", "Dar un golpecito en la cabeza", "Apagar todas las luces"],
                correct: 1,
                reason_en: "Identification prevents startling the resident and builds trust.",
                reason_es: "Identificarse evita sobresaltar al residente y crea confianza."
            },
            {
                text_en: "When describing the location of food on a plate for a blind resident, use the:",
                text_es: "Al describir la ubicación de la comida en el plato para un residente ciego, use el/la:",
                options_en: ["Alphabet", "Clock face (e.g., 'the meat is at 6 o'clock')", "Compass directions", "Map"],
                options_es: ["Alfabeto", "Cara del reloj (ej. 'la carne está a las 6')", "Direcciones de brújula", "Mapa"],
                correct: 1,
                reason_en: "Clock-face description is a standard and effective method for orientation.",
                reason_es: "La descripción según el reloj es un método estándar y efectivo para orientar."
            },
            // 22. Legal / Ethical - Informed Consent
            {
                text_en: "Informed consent means:",
                text_es: "El consentimiento informado significa:",
                options_en: ["The resident is forced to agree", "The resident understands the risks and benefits of a treatment before agreeing", "The CNA signs for the resident", "No permission is needed"],
                options_es: ["Se obliga al residente a aceptar", "El residente entiende riesgos y beneficios del tratamiento antes de aceptar", "El CNA firma por el residente", "No hace falta permiso"],
                correct: 1,
                reason_en: "Autonomy is protected by ensuring residents understand their medical choices.",
                reason_es: "La autonomía se protege asegurando que los residentes entiendan sus opciones médicas."
            },
            // 23. Nutrition - Calories
            {
                text_en: "How many calories are in 1 gram of Fat?",
                text_es: "¿Cuántas calorías hay en 1 gramo de Grasa?",
                options_en: ["4", "7", "9", "12"],
                options_es: ["4", "7", "9", "12"],
                correct: 2,
                reason_en: "Fat is the most calorie-dense nutrient (9 cal/gram).",
                reason_es: "La grasa es el nutriente con más calorías (9 cal/gramo)."
            },
            // 24. Specialized Care - Elastic Bandages
            {
                text_en: "An elastic (ACE) bandage should be applied:",
                text_es: "Un vendaje elástico (ACE) debe aplicarse:",
                options_en: ["As tight as possible", "Evenly, without wrinkles, from the bottom up", "Only at night", "Loose enough to fall off"],
                options_es: ["Lo más apretado posible", "Uniformemente, sin arrugas, de abajo hacia arriba", "Solo por la noche", "Bastante suelto para que caiga"],
                correct: 1,
                reason_en: "Proper application prevents swelling and ensures support.",
                reason_es: "La aplicación correcta evita hinchazón y asegura el soporte."
            },
            // 25. Legal / Ethical - Wills
            {
                text_en: "A resident asks the CNA to witness the signing of their Will. The CNA should:",
                text_es: "Un residente pide al CNA ser testigo al firmar su Testamento. El CNA debe:",
                options_en: ["Sign it quickly", "Explain they cannot sign as a witness and notify the nurse or supervisor", "Call their own lawyer", "Ignore the resident"],
                options_es: ["Firmarlo rápido", "Explicar que no pueden firmar como testigos y avisar a la enfermera o supervisor", "Llamar a su propio abogado", "Ignorar al residente"],
                correct: 1,
                reason_en: "CNAs should not witness legal documents for residents to avoid legal complications.",
                reason_es: "Los CNAs no deben ser testigos de documentos legales de residentes para evitar complicaciones."
            },
            // 26. Nutrition - Choking (Mechanical Soft Diet recall)
            {
                text_en: "What should the CNA do if a resident starts choking on food?",
                text_es: "¿Qué debe hacer el CNA si un residente empieza a atragantarse con comida?",
                options_en: ["Give them water", "Perform the Heimlich Maneuver (Abdominal Thrusts)", "Slap them on the back", "Tell them to keep eating"],
                options_es: ["Darles agua", "Realizar la Maniobra de Heimlich (Compresiones Abdominales)", "Darles palmaditas en la espalda", "Decirles que sigan comiendo"],
                correct: 1,
                reason_en: "Abdominal thrusts are the standard emergency procedure for airway obstruction.",
                reason_es: "Las compresiones abdominales son el proceso de emergencia estándar por obstrucción de vía aérea."
            },
            // 27. Specialized Care - Range of Motion (Safety)
            {
                text_en: "During Range of Motion (ROM) exercises, the CNA should:",
                text_es: "Durante los ejercicios de Rango de Movimiento (ROM), el CNA debe:",
                options_en: ["Force the joint if it's stiff", "Stop the exercise if the resident reports pain", "Do the movements as fast as possible", "Only move the arms"],
                options_es: ["Forzar la articulación si está rígida", "Parar el ejercicio si el residente informa dolor", "Hacer los movimientos lo más rápido posible", "Solo mover los brazos"],
                correct: 1,
                reason_en: "Forcing a joint can cause injury; ROM should always be within the resident's comfort level.",
                reason_es: "Forzar una articulación puede herir; el ROM debe estar dentro del nivel de confort."
            },
            // 28. Legal / Ethical - Professionalism
            {
                text_en: "Accepting a $50 tip from a resident's family is:",
                text_es: "Aceptar una propina de $50 de la familia de un residente es:",
                options_en: ["Appropriate", "Unprofessional and a violation of most facility policies", "Required", "A sign of a good CNA"],
                options_es: ["Apropiado", "Poco profesional y una violación de la mayoría de políticas de centros", "Obligatorio", "Señal de un buen CNA"],
                correct: 1,
                reason_en: "CNAs are paid for their work; accepting tips creates an ethical conflict of interest.",
                reason_es: "A los CNAs se les paga; aceptar propinas crea un conflicto de interés ético."
            },
            // 29. Specialized Care - Oxygen (Fire)
            {
                text_en: "A 'No Smoking' sign must be posted:",
                text_es: "Un cartel de 'No Fumar' debe estar puesto:",
                options_en: ["In the breakroom only", "Where oxygen is in use", "In the parking lot", "In the kitchen"],
                options_es: ["Solo en la sala de descanso", "Donde se use oxígeno", "En el estacionamiento", "En la cocina"],
                correct: 1,
                reason_en: "Oxygen highly accelerates combustion; even a small flame can lead to an explosion.",
                reason_es: "El oxígeno acelera mucho la combustión; hasta una llama pequeña puede causar explosión."
            },
            // 30. Nutrition - Calculating Intake
            {
                text_en: "A resident drinks 4 oz of juice and 6 oz of water. What is the total intake in mL?",
                text_es: "Un residente bebe 4 oz de zumo y 6 oz de agua. ¿Cuál es la ingesta total en mL?",
                options_en: ["100 mL", "200 mL", "300 mL", "400 mL"],
                options_es: ["100 mL", "200 mL", "300 mL", "400 mL"],
                correct: 2,
                reason_en: "(4 + 6) = 10 oz. 10 oz * 30 mL/oz = 300 mL.",
                reason_es: "(4 + 6) = 10 oz. 10 oz * 30 mL/oz = 300 mL."
            },
            // 31. Legal/Ethical - Libel
            {
                text_en: "Writing false and damaging information about a coworker or resident is called:",
                text_es: "Escribir información falsa y dañina sobre un compañero o residente se llama:",
                options_en: ["Slander", "Libel", "A joke", "Fiction"],
                options_es: ["Calumnia (Slander)", "Libelo (Libel)", "Broma", "Ficción"],
                correct: 1,
                reason_en: "Libel is written defamation, while slander is spoken defamation.",
                reason_es: "Libelo es difamación escrita, mientras que calumnia (slander) es verbal."
            },
            // 32. Specialized Care - Sitz Bath
            {
                text_en: "A 'Sitz Bath' is used to:",
                text_es: "Un 'Baño de Asiento' (Sitz Bath) se usa para:",
                options_en: ["Wash the hair", "Cleanse and soothe the perineal area", "Exercise the arms", "Improve hearing"],
                options_es: ["Lavar el cabello", "Limpiar y calmar el área perineal", "Ejercitar los brazos", "Mejorar el oído"],
                correct: 1,
                reason_en: "Sitz baths are often used after surgery or to treat hemorrhoids.",
                reason_es: "Se usan tras cirugía o para tratar hemorroides."
            },
            // 33. Legal/Ethical - Assault vs. Battery
            {
                text_en: "Threatening to hit a resident is an example of:",
                text_es: "Amenazar con golpear a un residente es ejemplo de:",
                options_en: ["Assault", "Battery", "Good discipline", "A valid warning"],
                options_es: ["Asalto (Assault)", "Agresión (Battery)", "Buena disciplina", "Advertencia válida"],
                correct: 0,
                reason_en: "Assault is a threat or attempt to touch someone without consent; Battery Is the actual act.",
                reason_es: "El asalto es la amenaza o intento de tocar sin permiso; la agresión es el acto real."
            },
            // 34. Nutrition - Assisting with meals
            {
                text_en: "When feeding a resident who has had a stroke, you should place food:",
                text_es: "Al alimentar a un residente que tuvo un derrame, debe poner la comida:",
                options_en: ["On the weaker side of the mouth", "On the stronger side of the mouth", "At the back of the throat", "On the tongue"],
                options_es: ["En el lado más débil de la boca", "En el lado más fuerte de la boca", "Al fondo de la garganta", "Sobre la lengua"],
                correct: 1,
                reason_en: "Placing food on the stronger side allows the resident to chew and swallow safely.",
                reason_es: "Poner la comida en el lado fuerte permite masticar y tragar con seguridad."
            },
            // 35. Specialized Care - Deep Breathing
            {
                text_en: "After surgery, a resident should be encouraged to cough and deep breathe to prevent:",
                text_es: "Tras la cirugía, se debe animar al residente a toser y respirar profundo para evitar:",
                options_en: ["Stomach aches", "Pneumonia", "Broken bones", "Memory loss"],
                options_es: ["Dolor de estómago", "Neumonía", "Huesos rotos", "Pérdida de memoria"],
                correct: 1,
                reason_en: "Deep breathing expands the lungs and clears secretions.",
                reason_es: "Respirar profundo expande pulmones y limpia secreciones."
            },
            // 36. Legal/Ethical - Invasion of Privacy
            {
                text_en: "Scanning a resident's chart out of curiosity even though they are not your patient is:",
                text_es: "Mirar la historia de un residente por curiosidad sin que sea su paciente es:",
                options_en: ["Learning", "Invasion of Privacy / HIPAA violation", "Supporting coworkers", "Efficiency"],
                options_es: ["Aprendizaje", "Invasión de Privacidad / violación de HIPAA", "Apoyar compañeros", "Eficiencia"],
                correct: 1,
                reason_en: "Medical records should only be accessed on a 'need to know' basis for care.",
                reason_es: "Solo se debe entrar a historias médicas si es necesario para el cuidado."
            },
            // 37. Specialized Care - Collecting Stool
            {
                text_en: "When collecting a stool specimen, the CNA should ensure that:",
                text_es: "Al recoger una muestra de heces, el CNA debe asegurar que:",
                options_en: ["Stool is mixed with urine", "Stool is not contaminated with urine or toilet paper", "The sample is kept in the bathroom for hours", "The resident doesn't know about it"],
                options_es: ["Las heces se mezclen con orina", "Las heces no se contaminen con orina o papel higiénico", "La muestra repose horas en el baño", "El residente no lo sepa"],
                correct: 1,
                reason_en: "Contamination can interfere with laboratory test results.",
                reason_es: "La contaminación puede interferir con los resultados del laboratorio."
            },
            // 38. Legal/Ethical - Theft
            {
                text_en: "If a CNA finds a $20 bill on the floor of a resident's room, they should:",
                text_es: "Si un CNA halla un billete de $20 en el suelo del cuarto de un residente, debe:",
                options_en: ["Keep it", "Give it to the nurse or supervisor", "Give it to another resident", "Leave it there"],
                options_es: ["Quedárselo", "Darlo a la enfermera o supervisor", "Darlo a otro residente", "Dejarlo ahí"],
                correct: 1,
                reason_en: "Honesty and following policy are critical for professional conduct.",
                reason_es: "La honestidad y seguir la política son críticos para la conducta profesional."
            },
            // 39. Specialized Care - Ambulation with a cane
            {
                text_en: "When a resident uses a cane, it should be held on their:",
                text_es: "Cuando un residente usa bastón, debe llevarlo en su:",
                options_en: ["Stronger side", "Weaker side", "Right side always", "Left side always"],
                options_es: ["Lado más fuerte", "Lado más débil", "Lado derecho siempre", "Lado izquierdo siempre"],
                correct: 0,
                reason_en: "The cane provides support and balance when the weaker leg moves.",
                reason_es: "El bastón da apoyo y equilibrio cuando se mueve la pierna débil."
            },
            // 40. Legal/Ethical - Code of Ethics
            {
                text_en: "The CNA Code of Ethics includes which of the following?",
                text_es: "¿Cuál de los siguientes incluye el Código de Ética del CNA?",
                options_en: ["Always arriving late", "Providing care without bias or prejudice", "Ignoring resident complaints", "Gossiping about coworkers"],
                options_es: ["Llegar siempre tarde", "Brindar cuidado sin sesgos ni prejuicios", "Ignorar quejas de residentes", "Chismear sobre compañeros"],
                correct: 1,
                reason_en: "Ethical care means treating all residents with respect and fairness.",
                reason_es: "Cuidado ético es tratar a todos con respeto y justicia."
            },
            // 41. Nutrition - Dysphagia
            {
                text_en: "Dysphagia is the medical term for:",
                text_es: "Disfagia es el término médico para:",
                options_en: ["Difficulty breathing", "Difficulty swallowing", "Difficulty walking", "Difficulty speaking"],
                options_es: ["Dificultad para respirar", "Dificultad para tragar", "Dificultad para caminar", "Dificultad para hablar"],
                correct: 1,
                reason_en: "Residents with dysphagia are at high risk for aspiration.",
                reason_es: "Residentes con disfagia tienen alto riesgo de aspiración."
            },
            // 42. Specialized Care - Heat Application
            {
                text_en: "When applying a warm compress, the CNA should check the skin every:",
                text_es: "Al aplicar una compresa tibia, el CNA debe revisar la piel cada:",
                options_en: ["5 minutes", "20 minutes", "Hour", "Shift change"],
                options_es: ["5 minutos", "20 minutos", "Hora", "Cambio de turno"],
                correct: 0,
                reason_en: "Elderly skin is sensitive and can burn easily; frequent checks are necessary.",
                reason_es: "La piel de ancianos es sensible y quema fácil; revisiones periódicas son necesarias."
            },
            // 43. Legal/Ethical - Self-Determination
            {
                text_en: "A resident refuses to take a bath. The CNA should:",
                text_es: "Un residente se niega a bañarse. El CNA debe:",
                options_en: ["Force them into the tub", "Respect their refusal and report it to the nurse", "Tell them they smell bad", "Call the family to complain"],
                options_es: ["Obligarlos a entrar a la tina", "Respetar su negativa e informar a la enfermera", "Decirles que huelen mal", "Llamar a la familia para quejarse"],
                correct: 1,
                reason_en: "Residents have the right to refuse care.",
                reason_es: "Los residentes tienen derecho a rechazar el cuidado."
            },
            // 44. Nutrition - Percentage of food eaten
            {
                text_en: "If a resident eats half of their meal, the CNA should record it as:",
                text_es: "Si un residente come la mitad de su comida, el CNA debe registrarlo como:",
                options_en: ["25%", "50%", "75%", "100%"],
                options_es: ["25%", "50%", "75%", "100%"],
                correct: 1,
                reason_en: "Accurate documentation of nutritional intake is essential.",
                reason_es: "Documentar con precisión la ingesta nutricional es esencial."
            },
            // 45. Specialized Care - Cold Application
            {
                text_en: "Cold applications are often used to:",
                text_es: "Las aplicaciones frías suelen usarse para:",
                options_en: ["Increase blood flow", "Reduce swelling and pain", "Make the resident sleep", "Warming up the resident"],
                options_es: ["Subir el flujo de sangre", "Reducir hinchazón y dolor", "Hacer dormir al residente", "Calentar al residente"],
                correct: 1,
                reason_en: "Cold causes blood vessels to constrict, which helps reduce inflammation.",
                reason_es: "El frío hace que los vasos se contraigan, reduciendo la inflamación."
            },
            // 46. Legal/Ethical - Aiding and Abetting
            {
                text_en: "Seeing a coworker steal and not reporting it is called:",
                text_es: "Ver a un compañero robar y no denunciarlo se llama:",
                options_en: ["Friendship", "Aiding and Abetting", "Efficiency", "Mindfulness"],
                options_es: ["Amistad", "Complicidad (Aiding and Abetting)", "Eficiencia", "Atención plena"],
                correct: 1,
                reason_en: "Failing to report a crime makes you legally responsible as well.",
                reason_es: "No informar un delito te hace legalmente responsable también."
            },
            // 47. Specialized Care - Elastic Bandage Checking
            {
                text_en: "After applying an ACE bandage, the CNA should check for color and temperature of the skin at least every:",
                text_es: "Tras poner un vendaje ACE, el CNA debe ver el color y calor de la piel al menos cada:",
                options_en: ["15 minutes", "1 hour", "4 hours", "Day"],
                options_es: ["15 minutos", "1 hora", "4 horas", "Día"],
                correct: 1,
                reason_en: "Ensuring the bandage is not too tight is critical for circulation.",
                reason_es: "Asegurar que el vendaje no apriete es vital para la circulación."
            },
            // 48. Nutrition - Water Pitcher Safety
            {
                text_en: "When refilling a water pitcher, the CNA should not:",
                text_es: "Al rellenar una jarra de agua, el CNA no debe:",
                options_en: ["Use ice", "Touch the ice scoop to the rim of the pitcher", "Use fresh water", "Wear gloves if required"],
                options_es: ["Usar hielo", "Tocar el borde de la jarra con el recogedor de hielo", "Usar agua fresca", "Usar guantes si se requiere"],
                correct: 1,
                reason_en: "Touching the scoop to the pitcher causes cross-contamination.",
                reason_es: "Tocar la jarra con el recogedor causa contaminación cruzada."
            },
            // 49. Legal/Ethical - Mandated Reporter
            {
                text_en: "CNAs are 'Mandated Reporters', which means they:",
                text_es: "Los CNAs son 'Informadores Obligatorios', lo que significa que:",
                options_en: ["Can choose whether to report abuse", "Must legally report any suspected abuse", "Only report to friends", "Only report during the day"],
                options_es: ["Pueden elegir si informar o no", "Deben informar por ley cualquier sospecha de abuso", "Solo informan a amigos", "Solo informan de día"],
                correct: 1,
                reason_en: "Mandated reporting is a legal obligation to protect vulnerable residents.",
                reason_es: "Informar es una obligación legal para proteger a los residentes."
            },
            // 50. Specialized Care - Foot Care (Safety)
            {
                text_en: "A CNA should NEVER do which of the following during foot care for a diabetic resident?",
                text_es: "¿Qué NO debe hacer NUNCA un CNA en el cuidado de pies de un diabético?",
                options_en: ["Wash with soap and water", "Cut the resident's toenails", "Apply lotion (but not between toes)", "Dry the feet thoroughly"],
                options_es: ["Lavar con agua y jabón", "Cortar las uñas de los pies del residente", "Poner loción (pero no entre los dedos)", "Secar bien los pies"],
                correct: 1,
                reason_en: "Diabetic residents have poor circulation and healing; only a nurse or podiatrist should cut their nails.",
                reason_es: "Diabéticos tienen mala circulación; solo enfermera o podólogo debe cortar sus uñas."
            },
            // 51. Legal/Ethical - Malpractice
            {
                text_en: "Malpractice is a type of negligence committed by:",
                text_es: "La mala praxis (Malpractice) es un tipo de negligencia cometida por:",
                options_en: ["A resident", "A professional (like a nurse or doctor)", "A visitor", "A child"],
                options_es: ["Un residente", "Un profesional (como enfermera o médico)", "Un visitante", "Un niño"],
                correct: 1,
                reason_en: "Malpractice involves a failure to meet professional standards of care.",
                reason_es: "La mala praxis implica no cumplir los estándares profesionales de cuidado."
            },
            // 52. Specialized Care - Denture Care
            {
                text_en: "When cleaning dentures, the CNA should line the sink with a towel to:",
                text_es: "Al limpiar dentaduras, el CNA debe cubrir el fondo del lavabo con una toalla para:",
                options_en: ["Keep the sink clean", "Protect the dentures from breaking if they are dropped", "Dry the dentures", "Decorate the bathroom"],
                options_es: ["Mantener limpio el lavabo", "Proteger las dentaduras de roturas si se caen", "Secar las dentaduras", "Decorar el baño"],
                correct: 1,
                reason_en: "Dentures are expensive and fragile; a towel provides a cushion.",
                reason_es: "Las dentaduras son caras y frágiles; una toalla sirve de amortiguador."
            },
            // 53. Nutrition - Proper Seating
            {
                text_en: "A resident should be sitting at what angle for meals?",
                text_es: "¿A qué ángulo debe estar sentado un residente para las comidas?",
                options_en: ["15 degrees", "45 degrees", "90 degrees (Upright)", "180 degrees (flat)"],
                options_es: ["15 grados", "45 grados", "90 grados (Erecto)", "180 grados (plano)"],
                correct: 2,
                reason_en: "A 90-degree upright position is safest for swallowing.",
                reason_es: "Sentarse a 90 grados es lo más seguro para tragar."
            },
            // 54. Specialized Care - Blood Pressure (Errors)
            {
                text_en: "If a CNA cannot hear a blood pressure clearly, they should:",
                text_es: "Si un CNA no oye bien la presión arterial, debe:",
                options_en: ["Make up a number", "Wait 1-2 minutes and try again, or ask the nurse for help", "Report the last reading from yesterday", "Do nothing"],
                options_es: ["Inventarse un número", "Esperar 1-2 minutos y reintentar, o pedir ayuda a la enfermera", "Informar la cifra de ayer", "No hacer nada"],
                correct: 1,
                reason_en: "Accuracy is vital; guessing can lead to dangerous medical errors.",
                reason_es: "La precisión es vital; adivinar puede causar errores médicos graves."
            },
            // 55. Legal/Ethical - Defamation
            {
                text_en: "Slander is:",
                text_es: "La calumnia (Slander) es:",
                options_en: ["Written defamation", "Spoken defamation", "Taking money", "Hitting someone"],
                options_es: ["Difamación escrita", "Difamación hablada", "Tomar dinero", "Golpear a alguien"],
                correct: 1,
                reason_en: "Slander harms a person's reputation through verbal lies.",
                reason_es: "La calumnia daña la reputación de alguien mediante mentiras verbales."
            },
            // 56. Nutrition - Supplemental Feeding
            {
                text_en: "Supplemental feedings (like Ensure or Glucerna) are usually given:",
                text_es: "Los suplementos alimenticios (como Ensure o Glucerna) suelen darse:",
                options_en: ["Instead of all meals", "Between meals to increase calorie/nutrient intake", "Only to residents who are overweight", "Once a year"],
                options_es: ["En vez de todas las comidas", "Entre comidas para subir la ingesta de calorías/nutrientes", "Solo a residentes con sobrepeso", "Una vez al año"],
                correct: 1,
                reason_en: "Supplements help residents who cannot meet their nutritional needs through regular meals alone.",
                reason_es: "Los suplementos ayudan a quienes no cubren sus necesidades con la comida normal."
            },
            // 57. Specialized Care - Foley Catheter Care
            {
                text_en: "When providing catheter care, the CNA should:",
                text_es: "Al dar cuidado de sonda, el CNA debe:",
                options_en: ["Pull on the catheter", "Clean away from the urinary meatus (opening)", "Clean toward the urinary meatus", "Use the same washcloth for the whole body"],
                options_es: ["Tirar de la sonda", "Limpiar alejándose del meato urinario (abertura)", "Limpiar hacia el meato urinario", "Usar la misma toallita para todo el cuerpo"],
                correct: 1,
                reason_en: "Cleaning away from the opening prevents moving bacteria into the bladder.",
                reason_es: "Limpiar hacia afuera evita meter bacterias en la vejiga."
            },
            // 58. Legal/Ethical - Theft suspicion
            {
                text_en: "A CNA notices a resident's diamond ring is missing. Their first action should be:",
                text_es: "Un CNA nota que falta el anillo de diamante de un residente. Su primera acción debe ser:",
                options_en: ["Search other residents' rooms", "Report the loss to the nurse immediately", "Assume the resident lost it and do nothing", "Call the police"],
                options_es: ["Registrar cuartos de otros residentes", "Informar la pérdida a la enfermera de inmediato", "Asumir que lo perdió y no hacer nada", "Llamar a la policía"],
                correct: 1,
                reason_en: "Prompt reporting allows the facility to begin an investigation.",
                reason_es: "Informar pronto permite que el centro inicie una investigación."
            },
            // 59. Specialized Care - TED Hose removal
            {
                text_en: "How often should TED hose be removed for skin inspection?",
                text_es: "¿Cada cuánto deben quitarse las medias TED para revisar la piel?",
                options_en: ["Every hour", "At least once a day (usually during morning care)", "Once a week", "Never"],
                options_es: ["Cada hora", "Al menos una vez al día (usualmente en el aseo matinal)", "Una vez por semana", "Nunca"],
                correct: 1,
                reason_en: "Frequent skin inspection prevents pressure sores from the stockings themselves.",
                reason_es: "Revisar la piel evita úlceras por las propias medias."
            },
            // 60. Nutrition - Importance of hydration
            {
                text_en: "Adequate hydration helps prevent which of the following?",
                text_es: "¿Una hidratación adecuada ayuda a prevenir cuál de los siguientes?",
                options_en: ["Constipation and Urinary Tract Infections (UTIs)", "Blindness", "Broken arms", "Hair loss"],
                options_es: ["Estreñimiento e Infecciones Urinarias (UTIs)", "Ceguera", "Brazos rotos", "Pérdida de cabello"],
                correct: 0,
                reason_en: "Water is essential for digestion and flushing bacteria from the urinary system.",
                reason_es: "El agua es clave para la digestión y para eliminar bacterias del sistema urinario."
            }
        ]
    },
    {
        name: "Simulacro Mixto 6",
        questions: [
            // 1. Basic Care - Hygiene
            {
                text_en: "When giving a bed bath, the CNA should cover the resident with a 'Bath Blanket' to:",
                text_es: "Al dar un baño en cama, el CNA debe cubrir al residente con una 'Manta de Baño' para:",
                options_en: ["Hide the resident", "Provide warmth and privacy", "Keep the bed dry", "Save time"],
                options_es: ["Esconder al residente", "Proveer calor y privacidad", "Mantener la cama seca", "Ahorrar tiempo"],
                correct: 1,
                reason_en: "A bath blanket provides dignity and prevents the resident from getting chilled during the bath.",
                reason_es: "Una manta de baño brinda dignidad y evita que el residente se enfríe durante el proceso."
            },
            // 2. Safety - Mechanical Lift
            {
                text_en: "Using a mechanical lift (Hoyer lift) requires at least how many staff members?",
                text_es: "¿Usar un elevador mecánico (Hoyer lift) requiere al menos cuántos miembros del personal?",
                options_en: ["One", "Two", "Three", "Four"],
                options_es: ["Uno", "Dos", "Tres", "Cuatro"],
                correct: 1,
                reason_en: "Safety regulations usually require at least two people to operate a mechanical lift safely.",
                reason_es: "Las normas de seguridad suelen requerir al menos dos personas para operar un elevador mecánico con seguridad."
            },
            // 3. Body Systems - Integumentary
            {
                text_en: "The first sign of a pressure injury is usually:",
                text_es: "El primer signo de una lesión por presión suele ser:",
                options_en: ["A deep hole", "Reddened skin that does not turn white when pressed (non-blanchable)", "Bleeding", "A large blister"],
                options_es: ["Un agujero profundo", "Piel enrojecida que no se vuelve blanca al presionarla (no blanqueable)", "Sangrado", "Una ampolla grande"],
                correct: 1,
                reason_en: "Non-blanchable erythema indicates Stage 1 pressure injury.",
                reason_es: "El eritema no blanqueable indica una lesión por presión de Etapa 1."
            },
            // 4. Communication - Active Listening
            {
                text_en: "Leaning forward and making eye contact while a resident is speaking is an example of:",
                text_es: "Inclinarse hacia adelante y hacer contacto visual mientras un residente habla es ejemplo de:",
                options_en: ["Being rude", "Active listening", "Daydreaming", "Being tired"],
                options_es: ["Ser grosero", "Escucha activa", "Estar distraído", "Estar cansado"],
                correct: 1,
                reason_en: "Non-verbal cues like eye contact show the resident that you are paying attention.",
                reason_es: "Las señales no verbales como el contacto visual muestran al residente que usted está prestando atención."
            },
            // 5. Rights - Privacy
            {
                text_en: "During a procedure, a resident's door or curtain should be:",
                text_es: "Durante un procedimiento, la puerta o cortina del residente debe estar:",
                options_en: ["Open so everyone can see", "Closed to maintain privacy", "Only halfway closed", "It doesn't matter"],
                options_es: ["Abierta para que todos vean", "Cerrada para mantener la privacidad", "Solo medio cerrada", "No importa"],
                correct: 1,
                reason_en: "Maintaining privacy is a core resident right and essential for dignity.",
                reason_es: "Mantener la privacidad es un derecho básico del residente y esencial para la dignidad."
            },
            // 6. Infection Control - PPE removal
            {
                text_en: "When removing Personal Protective Equipment (PPE), which item is usually removed LAST?",
                text_es: "Al quitarse el Equipo de Protección Personal (EPP), ¿qué artículo se suele quitar al ÚLTIMO?",
                options_en: ["Gloves", "Gown", "Mask", "Goggles"],
                options_es: ["Guantes", "Bata", "Máscara", "Gafas"],
                correct: 2,
                reason_en: "The mask is removed last to protect the airway from pathogens while disposing of other gear.",
                reason_es: "La máscara se quita al final para proteger las vías respiratorias mientras se desecha el resto del equipo."
            },
            // 7. Vitals - Respiration
            {
                text_en: "Why should you not tell the resident you are counting their breaths?",
                text_es: "¿Por qué no debe decirle al residente que está contando sus respiraciones?",
                options_en: ["It's a secret", "People may change their breathing pattern if they know they are being watched", "It takes too long", "The nurse said so"],
                options_es: ["Es un secreto", "Las personas pueden cambiar su patrón respiratorio si saben que las observan", "Tarda demasiado", "La enfermera lo dijo"],
                correct: 1,
                reason_en: "Observation without the resident's awareness ensures a more accurate, natural respiratory rate.",
                reason_es: "La observación sin que el residente lo sepa asegura una tasa respiratoria más natural y precisa."
            },
            // 8. Specialized Care - Seizure
            {
                text_en: "If a resident starts having a seizure, the CNA's priority is to:",
                text_es: "Si un residente empieza a tener una convulsión, la prioridad del CNA es:",
                options_en: ["Put something in their mouth", "Hold them down tightly", "Ensure the area is safe and protect the resident's head", "Run away and find help"],
                options_es: ["Poner algo en su boca", "Sujetarlos con fuerza", "Asegurar que el área sea segura y proteger la cabeza del residente", "Correr a buscar ayuda"],
                correct: 2,
                reason_en: "Safety and head protection are critical during a seizure; never restrain or put items in the mouth.",
                reason_es: "La seguridad y proteger la cabeza son críticos; nunca sujete ni ponga objetos en la boca."
            },
            // 9. Nutrition - Aspiration risk
            {
                text_en: "Which of the following increases the risk of 'Aspiration' while eating?",
                text_es: "¿Cuál de los siguientes aumenta el riesgo de 'Aspiración' al comer?",
                options_en: ["Sitting upright at 90 degrees", "Talking or laughing while food is in the mouth", "Taking small bites", "Drinking water between bites"],
                options_es: ["Sentarse derecho a 90 grados", "Hablar o reír mientras hay comida en la boca", "Tomar bocados pequeños", "Beber agua entre bocados"],
                correct: 1,
                reason_en: "Talking while eating can cause food to enter the airway instead of the esophagus.",
                reason_es: "Hablar al comer puede hacer que la comida entre en la vía aérea en lugar del esófago."
            },
            // 10. Legal/Ethical - Abuse reporting
            {
                text_en: "If you observe a resident with unexplained bruises in various stages of healing, you should:",
                text_es: "Si observa a un residente con moretones inexplicables en varias etapas de curación, debe:",
                options_en: ["Ignore it", "Ask the resident if they fell", "Report it immediately to the nurse as suspected abuse", "Wait for more bruises to appear"],
                options_es: ["Ignorarlo", "Preguntar al residente si se cayó", "Reportarlo de inmediato a la enfermera como sospecha de abuso", "Esperar a que aparezcan más moretones"],
                correct: 2,
                reason_en: "Unexplained bruising is a potential sign of physical abuse and must be reported.",
                reason_es: "Los moretones inexplicables son un signo potencial de abuso físico y deben informarse."
            },
            // 11. Body Systems - Urinary
            {
                text_en: "What is the medical term for 'Painful or Difficult Urination'?",
                text_es: "¿Cuál es el término médico para 'Micción dolorosa o dificultosa'?",
                options_en: ["Polyuria", "Dysuria", "Hematuria", "Anuria"],
                options_es: ["Poliuria", "Disuria", "Hematuria", "Anuria"],
                correct: 1,
                reason_en: "The prefix 'dys-' means difficult or painful, and '-uria' refers to urine.",
                reason_es: "El prefijo 'dis-' significa dificultoso o doloroso, y '-uria' se refiere a la orina."
            },
            // 12. Safety - Fire (RACE)
            {
                text_en: "In the RACE acronym for fire safety, what does the 'A' stand for?",
                text_es: "En las siglas RACE para seguridad contra incendios, ¿qué significa la 'A'?",
                options_en: ["Act quickly", "Activate the alarm", "Ask for help", "Always be careful"],
                options_es: ["Actuar rápido", "Activar la alarma (Activate)", "Avisar por ayuda", "Andar con cuidado"],
                correct: 1,
                reason_en: "RACE: Remove/Rescue, Activate alarm, Contain fire, Extinguish/Evacuate.",
                reason_es: "RACE: Rescatar, Activar alarma, Contener fuego, Extinguir/Evacuar."
            },
            // 13. Basic Care - Transfer
            {
                text_en: "When helping a resident transfer from bed to wheelchair, you should use:",
                text_es: "Al ayudar a un residente a pasar de la cama a la silla de ruedas, debe usar:",
                options_en: ["Good body mechanics and a gait belt", "Your back muscles only", "One hand", "No equipment"],
                options_es: ["Buena mecánica corporal y cinturón de marcha", "Solo los músculos de la espalda", "Una mano", "Ningún equipo"],
                correct: 0,
                reason_en: "Gait belts and proper body mechanics (using legs, not back) prevent injury to both CNA and resident.",
                reason_es: "Los cinturones y la mecánica correcta (usar piernas, no espalda) evitan lesiones al CNA y al residente."
            },
            // 14. Mental Health - Hallucinations
            {
                text_en: "A resident is screaming that there is a giant snake in the corner, but the room is empty. The CNA should:",
                text_es: "Un residente grita que hay una serpiente gigante en la esquina, pero el cuarto está vacío. El CNA debe:",
                options_en: ["Laugh and tell them serpents aren't real", "Tell them, 'I don't see a snake, but you seem very scared. I am here for you.'", "Pretend to kill the snake", "Call the resident 'crazy'"],
                options_es: ["Reírse y decir que las serpientes no existen", "Decir: 'No veo una serpiente, pero parece muy asustado. Estoy con usted'.", "Fingir que mata a la serpiente", "Llamar al residente 'loco'"],
                correct: 1,
                reason_en: "Using Validation and acknowledging feelings without confirming the hallucination is the therapeutic approach.",
                reason_es: "Usar la validación y reconocer los sentimientos sin confirmar la alucinación es el enfoque terapéutico."
            },
            // 15. Body Systems - Digestive
            {
                text_en: "The primary function of the Large Intestine is to:",
                text_es: "La función principal del Intestino Grueso es:",
                options_en: ["Digest proteins", "Absorb water and eliminate waste", "Pump blood", "Create insulin"],
                options_es: ["Digerir proteínas", "Absorber agua y eliminar desechos", "Bombear sangre", "Crear insulina"],
                correct: 1,
                reason_en: "The large intestine absorbs water from food waste, turning it into solid stool.",
                reason_es: "El intestino grueso absorbe el agua de los desechos, convirtiéndolos en heces sólidas."
            },
            // 16. Infection Control - Standard Precautions
            {
                text_en: "'Standard Precautions' should be used when caring for:",
                text_es: "Las 'Precauciones Estándar' deben usarse al cuidar a:",
                options_en: ["Only residents with known infections", "Every resident, regardless of their diagnosis", "Only children", "Only surgical patients"],
                options_es: ["Solo residentes con infecciones conocidas", "Cada residente, sin importar su diagnóstico", "Solo niños", "Solo pacientes quirúrgicos"],
                correct: 1,
                reason_en: "Standard precautions assume everyone's blood/body fluids could be infectious.",
                reason_es: "Las precauciones estándar asumen que la sangre/fluidos de cualquiera podrían ser infecciosos."
            },
            // 17. Rights - Choices
            {
                text_en: "A resident insists on wearing mismatched socks. The CNA should:",
                text_es: "Un residente insiste en usar calcetines que no combinan. El CNA debe:",
                options_en: ["Tell them they look silly and change them", "Respect the resident's choice and allow them to wear the socks", "Hide all their socks", "Call the family to report it"],
                options_es: ["Decir que se ven mal y cambiarlos", "Respetar la elección del residente y dejar que los use", "Esconder todos sus calcetines", "Llamar a la familia para informar"],
                correct: 1,
                reason_en: "Residents have the right to make personal choices, including what to wear.",
                reason_es: "Los residentes tienen derecho a tomar decisiones personales, incluyendo qué ropa vestir."
            },
            // 18. Specialized Care - Range of Motion
            {
                text_en: "Moving a limb AWAY from the midline of the body is called:",
                text_es: "Mover un miembro ALEJÁNDOLO de la línea media del cuerpo se llama:",
                options_en: ["Adduction", "Abduction", "Flexion", "Extension"],
                options_es: ["Aducción", "Abducción", "Flexión", "Extensión"],
                correct: 1,
                reason_en: "Abduction is 'taking away' (like kidnapping), while Adduction is 'adding to' the midline.",
                reason_es: "La abducción es 'alejar' (como abducir), mientras la aducción es 'añadir' a la línea media."
            },
            // 19. Body Systems - Cardiovascular
            {
                text_en: "The upper chambers of the heart are called:",
                text_es: "Las cámaras superiores del corazón se llaman:",
                options_en: ["Ventricles", "Atria", "Aortas", "Capillaries"],
                options_es: ["Ventrículos", "Aurículas (Atria)", "Aortas", "Capilares"],
                correct: 1,
                reason_en: "The heart has two atria (top) and two ventricles (bottom).",
                reason_es: "El corazón tiene dos aurículas (arriba) y dos ventrículos (abajo)."
            },
            // 20. Nutrition - Measuring Output
            {
                text_en: "When measuring urine output from a drainage bag, you should use a:",
                text_es: "Al medir la orina de una bolsa de drenaje, debe usar un/una:",
                options_en: ["Disposable cup", "Graduated container (Graduate)", "Regular pitcher", "Soup bowl"],
                options_es: ["Vaso desechable", "Contenedor graduado (probeta/graduate)", "Jarra normal", "Plato de sopa"],
                correct: 1,
                reason_en: "A graduate allows for an accurate measurement in milliliters (mL) or cubic centimeters (cc).",
                reason_es: "Un contenedor graduado permite una medida exacta en mililitros (mL) o centímetros cúbicos (cc)."
            },
            // 21. Legal/Ethical - Slander
            {
                text_en: "Telling a lie about a resident that damages their reputation is called:",
                text_es: "Contar una mentira sobre un residente que daña su reputación se llama:",
                options_en: ["Assault", "Slander", "Battery", "Good conversation"],
                options_es: ["Asalto", "Calumnia (Slander)", "Agresión", "Buena conversación"],
                correct: 1,
                reason_en: "Slander is spoken defamation.",
                reason_es: "La calumnia es la difamación verbal."
            },
            // 22. Infection Control - Handwashing duration
            {
                text_en: "When washing hands, how long should you rub your hands together with soap?",
                text_es: "Al lavarse las manos, ¿cuánto tiempo debe tallar sus manos con jabón?",
                options_en: ["5 seconds", "10 seconds", "At least 20 seconds", "1 minute"],
                options_es: ["5 segundos", "10 segundos", "Al menos 20 segundos", "1 minuto"],
                correct: 2,
                reason_en: "Rubbing for 20 seconds is the standard to effectively remove germs using friction.",
                reason_es: "Tallar por 20 segundos es el estándar para eliminar gérmenes eficazmente mediante la fricción."
            },
            // 23. Basic Care - Dentures
            {
                text_en: "Where should dentures be stored when not in the resident's mouth?",
                text_es: "¿Dónde deben guardarse las dentaduras cuando no están en la boca del residente?",
                options_en: ["On the bedside table", "In a labeled denture cup with cool water", "In the resident's pocket", "Under the pillow"],
                options_es: ["En la mesa de noche", "En una taza de dentadura etiquetada con agua fresca", "En el bolsillo del residente", "Bajo la almohada"],
                correct: 1,
                reason_en: "Water prevents the dentures from drying out and warping, and the cup protects them from damage.",
                reason_es: "El agua evita que se sequen y deformen, y la taza las protege de daños."
            },
            // 24. Safety - Fall incident
            {
                text_en: "If you find a resident on the floor, your FIRST action should be:",
                text_es: "Si halla a un residente en el suelo, su PRIMERA acción debe ser:",
                options_en: ["Pick them up immediately", "Ask them why they fell", "Stay with the resident and call for a nurse to assess them", "Clean the floor"],
                options_es: ["Levantarlos de inmediato", "Preguntar por qué se cayeron", "Quedarse con el residente y llamar a la enfermera para evaluarlo", "Limpiar el suelo"],
                correct: 2,
                reason_en: "Never move a fallen resident until a nurse has checked for injuries like fractures.",
                reason_es: "Nunca mueva a un residente caído hasta que la enfermera revise si hay lesiones o fracturas."
            },
            // 25. Vitals - Blood Pressure errors
            {
                text_en: "A resident's blood pressure is 160/100. This is:",
                text_es: "La presión arterial de un residente es 160/100. Esto es:",
                options_en: ["Normal", "Hypotension", "Hypertension", "Perfect"],
                options_es: ["Normal", "Hipotensión", "Hipertensión", "Perfecta"],
                correct: 2,
                reason_en: "Hypertension is defined as high blood pressure (typically above 130/80 or 140/90 depending on criteria).",
                reason_es: "La hipertensión se define como presión arterial alta (típicamente arriba de 140/90)."
            },
            // 26. Communication - Non-verbal
            {
                text_en: "Which of the following is a 'Facilitating' non-verbal behavior?",
                text_es: "¿Cuál de los siguientes es una conducta no verbal 'facilitadora'?",
                options_en: ["Crossing your arms", "Looking at your watch", "Nodding while the resident speaks", "Sighing loudly"],
                options_es: ["Cruzar los brazos", "Mirar su reloj", "Asentir mientras el residente habla", "Suspirar fuerte"],
                correct: 2,
                reason_en: "Nodding shows encouragement and understanding.",
                reason_es: "Asentir muestra ánimo y comprensión."
            },
            // 27. Rights - Grievance
            {
                text_en: "If a resident complains about the food, the CNA should:",
                text_es: "Si un residente se queja de la comida, el CNA debe:",
                options_en: ["Tell them to be grateful", "Listen and report the complaint to the nurse or dietary manager", "Ignore the complaint", "Eat the food themselves"],
                options_es: ["Decir que sean agradecidos", "Escuchar e informar a la enfermera o encargado de dieta", "Ignorar la queja", "Comerse la comida ellos mismos"],
                correct: 1,
                reason_en: "Residents have the right to file grievances without fear of retaliation.",
                reason_es: "Los residentes tienen derecho a presentar quejas sin miedo a represalias."
            },
            // 28. Specialized Care - Diabetes
            {
                text_en: "A diabetic resident is shaky, sweaty, and confused. This could be a sign of:",
                text_es: "Un residente diabético está tembloroso, sudoroso y confundido. Esto podría ser signo de:",
                options_en: ["High blood sugar (Hyperglycemia)", "Low blood sugar (Hypoglycemia)", "Getting sick", "Being excited"],
                options_es: ["Azúcar alta (Hiperglucemia)", "Azúcar baja (Hipoglucemia)", "Estar enfermando", "Estar emocionado"],
                correct: 1,
                reason_en: "Hypoglycemia (low blood sugar) is a medical emergency that needs quick sugar intake.",
                reason_es: "La hipoglucemia (azúcar baja) es una emergencia médica que requiere ingesta rápida de azúcar."
            },
            // 29. Body Systems - Musculoskeletal
            {
                text_en: "Atrophy is:",
                text_es: "La atrofia es:",
                options_en: ["Muscle growth", "Muscle wasting or shrinking due to lack of use", "Strong bones", "A type of exercise"],
                options_es: ["Crecimiento muscular", "Desgaste o encogimiento del músculo por falta de uso", "Huesos fuertes", "Un tipo de ejercicio"],
                correct: 1,
                reason_en: "Atrophy often occurs in residents who are bedbound and cannot exercise their limbs.",
                reason_es: "La atrofia suele ocurrir en residentes encamados que no pueden ejercitar sus miembros."
            },
            // 30. Infection Control - Sharps container
            {
                text_en: "A sharps container should be replaced when it is:",
                text_es: "Un contenedor de punzantes debe reemplazarse cuando esté:",
                options_en: ["Half full", "Full to the fill line (usually 3/4 full)", "Overflowing", "Completely empty"],
                options_es: ["Medio lleno", "Lleno hasta la línea (usualmente 3/4 de su capacidad)", "Desbordando", "Totalmente vacío"],
                correct: 1,
                reason_en: "Replacing before it's overflowing prevents needle sticks during disposal.",
                reason_es: "Reemplazarlo antes de que desborde previene pinchazos al desechar cosas."
            },
            // 31. Basic Care - Bedmaking
            {
                text_en: "Mitered corners are used in bedmaking to:",
                text_es: "Las esquinas en inglete (mitered corners) se usan en el tendido de camas para:",
                options_en: ["Make the bed look pretty", "Keep the sheets tight and prevent wrinkles that could cause skin breakdown", "Save time", "Use fewer sheets"],
                options_es: ["Hacer que la cama se vea bonita", "Mantener las sábanas tensas y evitar arrugas que dañen la piel", "Ahorrar tiempo", "Usar menos sábanas"],
                correct: 1,
                reason_en: "Wrinkled sheets can cause pressure and friction on the resident's skin.",
                reason_es: "Las sábanas arrugadas pueden causar presión y fricción en la piel del residente."
            },
            // 32. Safety - Restraint alternative
            {
                text_en: "Which of the following is an alternative to using a restraint?",
                text_es: "¿Cuál de los siguientes es una alternativa al uso de sujeciones?",
                options_en: ["Tying the resident to the chair", "Offering activities and frequent companionship", "Locking the resident's door", "Leaving the resident alone"],
                options_es: ["Atar al residente a la silla", "Ofrecer actividades y compañía frecuente", "Cerrar con llave el cuarto", "Dejar al residente solo"],
                correct: 1,
                reason_en: "Staff engagement and activities can reduce the agitation that leads to requests for restraints.",
                reason_es: "La participación del personal y las actividades reducen la agitación que lleva al pedido de sujeciones."
            },
            // 33. Body Systems - Respiratory
            {
                text_en: "Dyspnea is the medical term for:",
                text_es: "Disnea es el término médico para:",
                options_en: ["Painful urination", "Difficult or labored breathing", "High heart rate", "Stomach pain"],
                options_es: ["Micción dolorosa", "Respiración difícil o trabajosa", "Ritmo cardíaco alto", "Dolor de estómago"],
                correct: 1,
                reason_en: "'Dys-' means difficult, and '-pnea' refers to breathing.",
                reason_es: "'Dis-' significa difícil, y '-nea' se refiere a la respiración."
            },
            // 34. Communication - Barrier
            {
                text_en: "Which of the following is a barrier to communication?",
                text_es: "¿Cuál de los siguientes es una barrera para la comunicación?",
                options_en: ["Speaking clearly and slowly", "Using medical jargon the resident doesn't understand", "Asking open-ended questions", "Using an interpreter for non-English speakers"],
                options_es: ["Hablar claro y lento", "Usar jerga médica que el residente no entiende", "Hacer preguntas abiertas", "Usar intérprete si no hablan inglés"],
                correct: 1,
                reason_en: "Simple, everyday language should be used with residents to ensure understanding.",
                reason_es: "Se debe usar lenguaje sencillo y cotidiano con los residentes para asegurar que entiendan."
            },
            // 35. Rights - Resident information
            {
                text_en: "A resident's chart belongs to:",
                text_es: "La historia clínica del residente pertenece a:",
                options_en: ["The CNA", "The facility", "The resident's best friend", "The news"],
                options_es: ["El CNA", "La institución (facility)", "El mejor amigo del residente", "Las noticias"],
                correct: 1,
                reason_en: "The facility owns the physical record, but the resident has the right to access the information in it.",
                reason_es: "La institución posee el registro físico, pero el residente tiene derecho a acceder a su información."
            },
            // 36. Infection Control - Vomit cleanup
            {
                text_en: "When cleaning up vomit, the CNA should FIRST put on:",
                text_es: "Al limpiar un vómito, el CNA debe ponerse PRIMERO:",
                options_en: ["Shoes", "Gloves", "A hat", "Glasses"],
                options_es: ["Zapatos", "Guantes", "Un gorro", "Gafas de ver"],
                correct: 1,
                reason_en: "Gloves protect against contact with potentially infectious body fluids.",
                reason_es: "Los guantes protegen contra el contacto con fluidos corporales potencialmente infecciosos."
            },
            // 37. Basic Care - Perineal care (Female)
            {
                text_en: "When performing perineal care for a female, you should wash:",
                text_es: "Al realizar el aseo perineal de una mujer, se debe lavar:",
                options_en: ["Back to front", "Front to back (cleanest to dirtiest)", "Side to side", "In small circles"],
                options_es: ["De atrás hacia adelante", "De adelante hacia atrás (de lo más limpio a lo más sucio)", "De lado a lado", "En pequeños círculos"],
                correct: 1,
                reason_en: "Wiping front to back prevents bacteria from the anal area from entering the urinary tract.",
                reason_es: "Limpiar de adelante hacia atrás evita que bacterias del área anal entren al tracto urinario."
            },
            // 38. Safety - Poisoning
            {
                text_en: "If you find a resident drinking a cleaning chemical, you should FIRST:",
                text_es: "Si halla a un residente bebiendo un químico de limpieza, debe PRIMERO:",
                options_en: ["Tell them to stop and find the nurse immediately", "Give them a glass of milk", "Make them vomit", "Write it down for the end of the shift"],
                options_es: ["Decirle que pare y buscar a la enfermera de inmediato", "Darle un vaso de leche", "Inducirle el vómito", "Anotarlo para el final del turno"],
                correct: 0,
                reason_en: "Immediate notification is required for poisoning; do not induce vomiting unless directed by a professional.",
                reason_es: "Se requiere aviso inmediato ante un envenenamiento; no induzca el vómito sin orden profesional."
            },
            // 39. Vitals - Blood Pressure (Cuff position)
            {
                text_en: "The blood pressure cuff should be placed over which artery?",
                text_es: "¿Sobre qué arteria debe colocarse el manguito de presión arterial?",
                options_en: ["Carotid", "Brachial", "Radial", "Femoral"],
                options_es: ["Carótida", "Braquial", "Radial", "Femoral"],
                correct: 1,
                reason_en: "The brachial artery (in the inner elbow) is the standard for upper arm blood pressure.",
                reason_es: "La arteria braquial (en la cara interna del codo) es el estándar para la presión en el brazo."
            },
            // 40. Specialized Care - Post-mortem
            {
                text_en: "When a resident dies, the CNA's behavior should be:",
                text_es: "Cuando un residente muere, la conducta del CNA debe ser:",
                options_en: ["Loud and happy", "Respectful and dignified", "Indifferent", "Talking about the resident's money"],
                options_es: ["Ruidosa y feliz", "Respetuosa y digna", "Indiferente", "Hablar sobre el dinero del residente"],
                correct: 1,
                reason_en: "Providing respect for the deceased and the family is a professional nursing responsibility.",
                reason_es: "Brindar respeto al difunto y a la familia es una responsabilidad profesional de enfermería."
            },
            // 41. Nutrition - Fluid output
            {
                text_en: "Fluid output is usually measured in which unit?",
                text_es: "¿En qué unidad se suele medir la eliminación de líquidos?",
                options_en: ["Milliliters (mL)", "Inches", "Pounds", "Minutes"],
                options_es: ["Mililitros (mL)", "Pulgadas", "Libras", "Minutos"],
                correct: 0,
                reason_en: "mL (or cc) is the medical standard for measuring fluids.",
                reason_es: "El mL (o cc) es el estándar médico para medir líquidos."
            },
            // 42. Body Systems - Integumentary (Functions)
            {
                text_en: "One function of the skin is to:",
                text_es: "Una función de la piel es:",
                options_en: ["Pump blood", "Protect the body from injury and pathogens", "Digest food", "Think clearly"],
                options_es: ["Bombear sangre", "Proteger al cuerpo de lesiones y patógenos", "Digerir comida", "Pensar con claridad"],
                correct: 1,
                reason_en: "The skin is the first line of defense against the outside world.",
                reason_es: "La piel es la primera línea de defensa contra el mundo exterior."
            },
            // 43. Legal/Ethical - Assault
            {
                text_en: "A CNA tells a resident, 'If you don't eat, I will hit you.' This is:",
                text_es: "Un CNA dice a un residente: 'Si no comes, te pegaré'. Esto es:",
                options_en: ["Assault", "Battery", "Slander", "Good encouragement"],
                options_es: ["Asalto (Assault)", "Agresión (Battery)", "Calumnia", "Buen ánimo"],
                correct: 0,
                reason_en: "Threatening to touch someone without permission is assault.",
                reason_es: "Amenazar con tocar a alguien sin permiso es un asalto."
            },
            // 44. Basic Care - Oral hygiene
            {
                text_en: "When providing oral care for an unconscious resident, the resident's head should be:",
                text_es: "Al dar aseo bucal a un residente inconsciente, la cabeza debe estar:",
                options_en: ["Turned to the side (to prevent aspiration)", "Straight up", "Down", "It doesn't matter"],
                options_es: ["Girada hacia un lado (para evitar aspiración)", "Derecha", "Hacia abajo", "No importa"],
                correct: 0,
                reason_en: "Turning the head allows fluid to drain out of the mouth rather than into the lungs.",
                reason_es: "Girar la cabeza permite que el fluido salga de la boca en lugar de ir a los pulmones."
            },
            // 45. Safety - Choking signal
            {
                text_en: "The universal sign for choking is:",
                text_es: "La señal universal de atragantamiento es:",
                options_en: ["Waving hands in the air", "Clutching the throat with one or both hands", "Smiling", "Sitting down"],
                options_es: ["Agitar las manos", "Sujetarse el cuello con una o ambas manos", "Sonreír", "Sentarse"],
                correct: 1,
                reason_en: "The universal sign alerts others that a person is unable to breathe or speak.",
                reason_es: "La señal universal avisa que la persona no puede respirar ni hablar."
            },
            // 46. Vitals - Normal Temp
            {
                text_en: "What is considered a 'normal' average oral temperature?",
                text_es: "¿Qué se considera una temperatura oral media 'normal'?",
                options_en: ["96.6°F", "98.6°F", "100.6°F", "102.6°F"],
                options_es: ["96.6°F", "98.6°F", "100.6°F", "102.6°F"],
                correct: 1,
                reason_en: "98.6°F (37°C) is the traditional average oral temperature for a healthy adult.",
                reason_es: "98.6°F (37°C) es la temperatura oral media tradicional para un adulto sano."
            },
            // 47. Communication - Clarification
            {
                text_en: "If you don't understand what a resident is saying, you should:",
                text_es: "Si no entiende lo que dice un residente, debe:",
                options_en: ["Pretend you did", "Ask the resident to repeat or clarify what they meant", "Walk away", "Tell them they are wrong"],
                options_es: ["Fingir que entendió", "Pedir al residente que repita o aclare lo que quiso decir", "Irse del cuarto", "Decir que están equivocados"],
                correct: 1,
                reason_en: "Seeking clarification ensures that communication is accurate and respectful.",
                reason_es: "Aclarar asegura que la comunicación sea precisa y respetuosa."
            },
            // 48. Rights - Privacy (Mail)
            {
                text_en: "A CNA sees a resident's letter on the table. The CNA should:",
                text_es: "Un CNA ve la carta de un residente en la mesa. El CNA debe:",
                options_en: ["Read it out of curiosity", "Respect the resident's privacy and leave it alone", "Show it to other CNAs", "Throw it in the trash"],
                options_es: ["Leerla por curiosidad", "Respetar la privacidad del residente y dejarla en paz", "Mostrarla a otros CNAs", "Tirarla a la basura"],
                correct: 1,
                reason_en: "Resident privacy includes personal mail and documentation.",
                reason_es: "La privacidad incluye el correo personal y la documentación."
            },
            // 49. Infection Control - Bagging linen
            {
                text_en: "Soiled linen should be:",
                text_es: "La ropa de cama sucia debe ser:",
                options_en: ["Carried close to your uniform", "Placed directly into a leak-proof laundry bag", "Shaken out in the hallway", "Placed on the floor"],
                options_es: ["Llevada pegada a su uniforme", "Puesta directamente en una bolsa de lavandería a prueba de fugas", "Sacudida en el pasillo", "Puesta en el suelo"],
                correct: 1,
                reason_en: "Proper bagging prevents the spread of pathogens from contaminated linen.",
                reason_es: "Embolsarla bien evita la propagación de patógenos desde la ropa sucia."
            },
            // 50. Body Systems - Endocrine
            {
                text_en: "Which organ produces insulin?",
                text_es: "¿Qué órgano produce la insulina?",
                options_en: ["Liver", "Pancreas", "Lungs", "Stomach"],
                options_es: ["Hígado", "Páncreas", "Pulmones", "Estómago"],
                correct: 1,
                reason_en: "The pancreas produces insulin, which regulates blood sugar levels.",
                reason_es: "El páncreas produce insulina, que regula el nivel de azúcar en sangre."
            },
            // 51. Basic Care - Shaving (Direction)
            {
                text_en: "When shaving a resident, you should shave in the direction of:",
                text_es: "Al afeitar a un residente, debe hacerlo en la dirección de:",
                options_en: ["The wind", "Hair growth", "Against the hair growth", "The stars"],
                options_es: ["El viento", "Cuidado del vello", "Contra el crecimiento", "Las estrellas"],
                correct: 1,
                reason_en: "Shaving in the direction of hair growth prevents cuts and irritation.",
                reason_es: "Afeitar en la dirección del crecimiento evita cortes e irritación."
            },
            // 52. Safety - Smoking
            {
                text_en: "A resident is smoking in bed. The CNA's FIRST action should be:",
                text_es: "Un residente fuma en la cama. La PRIMERA acción del CNA debe ser:",
                options_en: ["Tell them it smells bad", "Ask them to stop and follow the facility's smoking policy", "Report them tomorrow", "Ignore it"],
                options_es: ["Decir que huele mal", "Pedir que pare y seguir la política de fumadores del centro", "Informar mañana", "Ignorarlo"],
                correct: 1,
                reason_en: "Smoking in bed is a major fire hazard and usually prohibited in medical facilities.",
                reason_es: "Fumar en la cama es un riesgo grave de incendio y suele estar prohibido en centros médicos."
            },
            // 53. Vitals - Radial Pulse
            {
                text_en: "Where is the 'Radial Pulse' located?",
                text_es: "¿Dónde se localiza el 'Pulso Radial'?",
                options_en: ["Neck", "Wrist (thumb side)", "Behind the knee", "Ankle"],
                options_es: ["Cuello", "Muñeca (lado del pulgar)", "Detrás de la rodilla", "Tobillo"],
                correct: 1,
                reason_en: "The radial artery is located on the thumb side of the wrist.",
                reason_es: "La arteria radial se sitúa en el lado del pulgar en la muñeca."
            },
            // 54. Communication - Silence
            {
                text_en: "Using silence during a conversation can be helpful because it:",
                text_es: "Usar el silencio durante una conversación puede ser útil porque:",
                options_en: ["Is boring", "Gives the resident time to think and respond", "Shows you are not listening", "Makes the resident angry"],
                options_es: ["Es aburrido", "Da tiempo al residente para pensar y responder", "Muestra que usted no escucha", "Enoja al residente"],
                correct: 1,
                reason_en: "Silence allows the resident to process information and formulate their own words.",
                reason_es: "El silencio permite al residente procesar información y formular sus palabras."
            },
            // 55. Rights - Visiting hours
            {
                text_en: "Residents have the right to visit with others:",
                text_es: "Los residentes tienen derecho a recibir visitas:",
                options_en: ["Never", "Only on Sundays", "At any reasonable hour, in private", "Only if the CNA is present"],
                options_es: ["Nunca", "Solo domingos", "A cualquier hora razonable, en privado", "Solo si el CNA está presente"],
                correct: 2,
                reason_en: "Communication and visitation are essential rights for maintaining social connections.",
                reason_es: "La comunicación y las visitas son derechos clave para mantener lazos sociales."
            },
            // 56. Infection Control - Mask usage
            {
                text_en: "A mask should be changed if it becomes:",
                text_es: "Una máscara debe cambiarse si se vuelve:",
                options_en: ["Boring", "Wet or moist", "Small", "Pink"],
                options_es: ["Aburrida", "Húmeda o mojada", "Pequeña", "Rosada"],
                correct: 1,
                reason_en: "Wet masks are less effective at filtering out pathogens.",
                reason_es: "Las máscaras húmedas son menos eficaces para filtrar patógenos."
            },
            // 57. Body Systems - Skeletal (Joints)
            {
                text_en: "A hinge joint (like the elbow) allows for:",
                text_es: "Una articulación en bisagra (como el codo) permite:",
                options_en: ["Circular motion", "Bending and straightening only", "No motion", "Twisting"],
                options_es: ["Movimiento circular", "Solo doblar y estirar", "Ningún movimiento", "Torsión"],
                correct: 1,
                reason_en: "Hinge joints move back and forth like a door hinge.",
                reason_es: "Las bisagras se mueven hacia adelante y atrás como la bisagra de una puerta."
            },
            // 58. Specialized Care - Oxygen tube safety
            {
                text_en: "An oxygen tube should not be placed:",
                text_es: "Un tubo de oxígeno no debe colocarse:",
                options_en: ["On the floor", "In the resident's nose", "Near the bedside table", "Behind the resident's ear"],
                options_es: ["En el suelo", "En la nariz del residente", "Cerca de la mesa de noche", "Tras la oreja del residente"],
                correct: 0,
                reason_en: "Tubes on the floor become contaminated and pose a tripping hazard.",
                reason_es: "Los tubos en el suelo se contaminan y pueden causar tropiezos."
            },
            // 59. Basic Care - Weighing
            {
                text_en: "When weighing a resident, you should ensure they are wearing:",
                text_es: "Al pesar a un residente, debe asegurar que lleve:",
                options_en: ["Heavy coats and boots", "The same type/amount of clothing they were wearing when last weighed", "Nothing", "Several blankets"],
                options_es: ["Abrigos pesados y botas", "El mismo tipo/cantidad de ropa que llevaba el peso anterior", "Nada", "Varias mantas"],
                correct: 1,
                reason_en: "Consistency in clothing ensures that weight changes are accurate reflections of the resident's status.",
                reason_es: "La consistencia en la ropa asegura que los cambios de peso reflejen el estado real del residente."
            },
            // 60. Final Review - The CNA's role
            {
                text_en: "The CNA's overall goal is to:",
                text_es: "El objetivo general del CNA es:",
                options_en: ["Cure diseases", "Provide high-quality care that promotes the resident's independence and dignity", "Make as much money as possible", "Stay in the breakroom"],
                options_es: ["Curar enfermedades", "Brindar cuidado de alta calidad que promueva la independencia y dignidad", "Ganar todo el dinero posible", "Quedarse en la sala de descanso"],
                correct: 1,
                reason_en: "Maintaining quality of life and respect is the heart of nursing assistant work.",
                reason_es: "Mantener la calidad de vida y el respeto es el corazón del trabajo del auxiliar de enfermería."
            }
        ]
    }
];

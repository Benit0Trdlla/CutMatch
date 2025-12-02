export const LANGUAGES = {
    EN: {
        HEADER: {
            HEADER_SUBTITLE: 'The cut that suits you.',
        },
        DIALOG: {
            TITLE: '¿How to use CutMatch?',
            SUBTITLE: 'CutMatch helps you find the best haircut for your face shape.',
            STEPS: {
                LABEL: 'Steps:',
                STEPS_LIST: [
                    'Upload a clear picture of your face',
                    'Select your gender',
                    'Indicate your age',
                    'Our AI will analyze your face shape',
                    'You will receive personalized haircut recommendations',
                ]
            },
            ADVICE: {
                LABEL: 'Advice:',
                TEXT: 'Use a well-lit photo with your face facing forward for best results.'
            }
        },
        DRAG_AND_DROP: {
            TITLE: 'Upload your images',
            HOW_TO_UPLOAD_TEXT: 'Drag and drop or click to upload images',
            ALLOWED_IMAGE: 'Accepts image/* between 1.00KB and 10.00MB'
        },
        ADVANCED_OPTIONS: {
            TITLE: 'Advanced options',
            INPUT_GENRE: {
                LABEL: 'Genre',
                PLACEHOLDER: ['Male', 'Female'],
            },
            INPUT_AGE: 'Age',
        },
        FOOTER: {
            TEXT: 'Made by',
        }
    },
    ES: {
        HEADER: {
            HEADER_SUBTITLE: 'El corte que encaja contigo.',
        },
        DIALOG: {
            TITLE: '¿Cómo usar CutMatch?',
            SUBTITLE: 'CutMatch te ayuda a encontrar el mejor corte de pelo según la forma de tu cara.',
            STEPS: {
                LABEL: 'Pasos:',
                STEPS_LIST: [
                    'Sube una foto clara de tu rostro',
                    'Selecciona tu género',
                    'Indica tu edad',
                    'Nuestra IA analizará la forma de tu cara',
                    'Recibirás recomendaciones personalizadas de cortes de pelo',
                ]
            },
            ADVICE: {
                LABEL: 'Consejo:',
                TEXT: 'Usa una foto con buena iluminación y tu rostro de frente para mejores resultados.'
            }
        },
        DRAG_AND_DROP: {
            TITLE: 'Sube tus fotos',
            HOW_TO_UPLOAD_TEXT: 'Arrastra y suelta o haz clic para subir tus fotos',
            ALLOWED_IMAGE: 'Acepta imágenes/* entre 1.00KB y 10.00MB'
        },
        ADVANCED_OPTIONS: {
            TITLE: 'Opciones avanzadas',
            INPUT_GENRE: {
                LABEL: 'Género',
                PLACEHOLDER: ['Hombre', 'Mujer'],
            },
            INPUT_AGE: 'Edad',
        },
        FOOTER: {
            TEXT: 'Hecho por',
        }
    }
} as const
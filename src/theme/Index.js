import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { textRecipe, headingRecipe, buttonRecipe, inputRecipe, cardRecipe } from './Components'

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                base: { value: '#ffffff' }, // white
                primary: { value: '#353535' }, // black
                secondary: { value: '#284b63' }, // blue
                accent: { value: '#3c6e71' }, // green (somehow)
                placeholder: { value: '#b0b3b5' }, // light gray
                hover: { value: '#dddddd' }, // gray
                warning: { value: '#EA5455' } // red
            },
            fontSizes: {
                xsm: { value: '.8vw' },
                sm: { value: '.9vw' },
                md: { value: '1vw' },
                lg: { value: '1.1vw' },
                xlg: { value: '1.2vw' }
            },
            sizes: {
                xsm: { value: '.8vw' },
                sm: { value: '.9vw' },
                md: { value: '1vw' },
                lg: { value: '1.1vw' },
                xlg: { value: '1.2vw' }
            }
        },
        recipes: {
            text: textRecipe,
            heading: headingRecipe,
            button: buttonRecipe,
            input: inputRecipe,
            card: cardRecipe
        },
        slotRecipes: {
            card: cardRecipe,
        },
        components: {
            Card: {
                slots: ['root'],
                recipe: 'card' 
            }
        }
    }
});

const theme = createSystem(defaultConfig, config)

export default theme
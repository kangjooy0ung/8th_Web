import clsx from 'clsx';
import {THEME, useTheme} from './context/ThemeProvider'
import { ReactElement } from "react";

export default function ThemeContent(): ReactElement {

    const { theme } = useTheme();
        
    const isLightMode = theme === THEME.LIGHT;

return (
    <div
        className={clsx(
            'p-4 h-dvh w-full',
            isLightMode ? 'bg-white' : 'bg-gray-800'
        )}
    >
        <h1 
            className={clsx(
            'text-wxl font-bold',
            isLightMode ? 'text-black' : 'text-white'
           )}
        >
            Theme Content
        </h1> 
    </div>
 );
}


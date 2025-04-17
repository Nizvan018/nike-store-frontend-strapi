import { StylesConfig, Theme, ThemeConfig } from "react-select";

export const styles: StylesConfig = {
    control: (baseStyles) => ({
        ...baseStyles,
        boxShadow: "none",
    }),
    valueContainer: (baseStyles) => ({
        ...baseStyles,
        fontSize: 14,
    }),
    option: (baseStyles) => ({
        ...baseStyles,
        fontSize: 14
    })
}

export const theme: ThemeConfig | undefined = (theme: Theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: "#5b86d6",
        primary25: "#e1eaf8"
    }
})
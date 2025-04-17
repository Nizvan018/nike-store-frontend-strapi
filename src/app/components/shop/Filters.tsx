import useFetch from "@/app/hooks/useFetch";
import Select from "react-select";
import { styles, theme } from "@assets/selectStyles";

const Filters = () => {
    const { loading: loadingColor, data: dataColor, error: errorColor } = useFetch<string[]>("/api/color", undefined, true);
    const { loading: loadingGender, data: dataGender, error: errorGender } = useFetch<string[]>("/api/gender", undefined, true);

    return (
        <div className="z-50 flex items-center gap-6">
            <Select
                options={dataColor?.map(color => ({ value: color, label: color }))}
                isLoading={loadingColor}
                isDisabled={errorColor !== null}
                placeholder="Color"
                className="w-[160px]"
                styles={styles}
                theme={theme}
            />

            <Select
                options={dataGender?.map(gender => ({ value: gender, label: gender }))}
                isLoading={loadingGender}
                isDisabled={errorGender !== null}
                placeholder="Gender"
                className="w-[160px]"
                styles={styles}
                theme={theme}
            />
        </div>
    )
}

export default Filters;

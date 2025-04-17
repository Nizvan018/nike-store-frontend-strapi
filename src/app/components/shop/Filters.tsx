import useFetch from "@/app/hooks/useFetch";
import Select from "react-select";
import { styles, theme } from "@assets/selectStyles";
import { Dispatch, SetStateAction } from "react";

interface Option {
    value: string;
    label: string;
}

interface Props {
    colorCallback: Dispatch<SetStateAction<Option | null>>
    genderCallback: Dispatch<SetStateAction<Option | null>>
}

const Filters = ({ colorCallback, genderCallback }: Props) => {
    const { loading: loadingColor, data: dataColor, error: errorColor } = useFetch<string[]>("/api/color", undefined, true);
    const { loading: loadingGender, data: dataGender, error: errorGender } = useFetch<string[]>("/api/gender", undefined, true);

    return (
        <div className="z-50 flex items-center gap-6">
            <Select
                options={dataColor?.map(color => ({ value: color, label: color }))}
                onChange={(newValue) => colorCallback(newValue as Option)}
                isLoading={loadingColor}
                isDisabled={errorColor !== null}
                isClearable
                isSearchable={false}
                placeholder="Color"
                className="w-[180px]"
                styles={styles}
                theme={theme}
            />

            <Select
                options={dataGender?.map(gender => ({ value: gender, label: gender }))}
                onChange={(newValue) => genderCallback(newValue as Option)}
                isLoading={loadingGender}
                isDisabled={errorGender !== null}
                isClearable
                isSearchable={false}
                placeholder="Gender"
                className="w-[180px]"
                styles={styles}
                theme={theme}
            />
        </div>
    )
}

export default Filters;

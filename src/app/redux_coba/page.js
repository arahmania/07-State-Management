import ReduxCounter from "@/components/ReduxCounter";
import ReduxProvider from "@/providers/ReduxProvider";

export default function Coba() {
    return (
        <ReduxProvider>
            <ReduxCounter />
        </ReduxProvider>
    );
}

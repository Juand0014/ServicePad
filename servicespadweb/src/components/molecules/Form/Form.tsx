import { Button } from "../../atoms";
import { FormGroup, Forms, Input, Label } from "../../atoms/Forms/FormsStyle";

type FormProps = {
	children: JSX.Element[];
}

export const FormMolecule = ({
	children
}: FormProps) => {
    return (
        <Forms>
            {children}
        </Forms>
    );
};

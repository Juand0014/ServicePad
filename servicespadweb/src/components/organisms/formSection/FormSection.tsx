import { inputEmpty } from "../../../helpers";
import { useFields } from "../../../hooks";
import { Button, Text, Title } from "../../atoms";
import { FormContainer, FormGroup, Forms, Input, Label } from "../../atoms/Forms/FormsStyle";
import { FormSection } from "../../atoms/Sections/SectionStyle";
import { FormMolecule } from "../../molecules/Form/Form";
import "./form.style.scss";

const defaultFieldValues = {
    author: {
        value: "",
        validations: [inputEmpty],
    },
    title: {
        value: "",
        validations: [inputEmpty],
    },
    content: {
        value: "",
        validation: [inputEmpty],
    },
};

export const FormSections = () => {
    const { values, errors, reset, handleChange, handleBlur } =
        useFields(defaultFieldValues);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values);
				reset();
    };
    return (
			<FormSection>
				<div className="section-new-article-header">
					<div className="title">
						<Title size="xl">Add New Blog Article</Title>
					</div>
					<div className="subtitle">
						<Text tertiary size="xl">
							Publish a new blog article to feature in the Easybank homepage.
						</Text>
					</div>
				</div>
        <FormContainer>
            <FormMolecule>
                <FormGroup>
                    <Label htmlFor="Author" className="_required">
                        Author<span className="required">*</span>
                    </Label>
                    <Input
                        id="Author"
                        type="text"
                        value={values.author || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="author"
                    />
                </FormGroup>
                <Text>{errors && errors.author}</Text>
                <FormGroup>
                    <Label htmlFor="Title">
                        Blog Title<span className="required">*</span>
                    </Label>
                    <Input
                        id="Title"
                        type="text"
                        value={values.title || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="title"
                    />
                </FormGroup>
                {errors && <div>{errors.title}</div>}
                <FormGroup>
                    <Label htmlFor="Content">Blog Content</Label>
                    <textarea
                        id="Content"
                        value={values.content || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="content"
                    />
                </FormGroup>
                <Button 
									padding="10px 180px" 
									size="16px" 
									type="submit"
									onClick={onSubmit}
									>
                    Save
                </Button>
            </FormMolecule>
        </FormContainer>
			</FormSection>
    );
};

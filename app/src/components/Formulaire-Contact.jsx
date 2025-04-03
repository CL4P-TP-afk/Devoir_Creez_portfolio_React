import { Button, Form, Label, Input } from "reactstrap";

const LabelInput = (props) => {
  return (
    <>
      <Label for={props.ForIdName} />
      <Input
        id={props.ForIdName}
        name={props.ForIdName}
        placeholder={props.Placeholder}
        type={props.Type}
        required
      />
    </>
  );
};

const FormContact = () => {
  return (
    <>
      <Form>
        <LabelInput ForIdName="nom" Placeholder="Votre nom" Type="text" />
        <LabelInput
          ForIdName="email"
          Placeholder="Votre adresse email"
          Type="email"
        />
        <LabelInput
          ForIdName="tel"
          Placeholder="Votre numéro de téléphone"
          Type="tel"
        />
        <LabelInput ForIdName="sujet" Placeholder="Sujet" Type="text" />
        <LabelInput
          ForIdName="message"
          Placeholder="Votre message"
          Type="textarea"
        />
        <div className="text-center pt-3">
          <Button color="primary" type="submit" value="Submit">
            Envoyer
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormContact;

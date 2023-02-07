import { FormWrapper } from "../../FormWrapper";

type AddressData = {
  firstHack: string;
  source: string;
  github: string;
  linkedIn: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  firstHack,
  source,
  github,
  linkedIn,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Background">
      <label>Is this your first hackathon?</label>
      <select
        value={firstHack}
        onChange={(e) => updateFields({ firstHack: e.target.value })}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label>How did you hear about this hackathon?</label>
      <select
        value={source}
        onChange={(e) => updateFields({ source: e.target.value })}
      >
        <option value="Discord">Discord</option>
        <option value="Flyer">Flyer</option>
        <option value="WordofMouth">Word of Mouth</option>
        <option value="Other">Other</option>
      </select>
      <label>Github</label>
      <input
        required
        type="text"
        value={github}
        onChange={(e) => updateFields({ github: e.target.value })}
      />
      <label>LinkedIn</label>
      <input
        required
        type="text"
        value={linkedIn}
        onChange={(e) => updateFields({ linkedIn: e.target.value })}
      />
    </FormWrapper>
  );
}

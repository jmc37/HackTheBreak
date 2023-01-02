import { FormWrapper } from "./FormWrapper";

type AccountData = {
  team: string;
  strengths: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  team,
  strengths,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>Are you joining as a team or an individual?</label>
      <select
        value={team}
        onChange={(e) => updateFields({ team: e.target.value })}
      >
        <option value="true">Team</option>
        <option value="false">Individual</option>
      </select>
      <label>What are some of your strengths?</label>
      <input
        required
        type="text"
        value={strengths}
        onChange={(e) => updateFields({ strengths: e.target.value })}
      />
    </FormWrapper>
  );
}

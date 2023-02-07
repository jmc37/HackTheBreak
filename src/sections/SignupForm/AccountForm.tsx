import { FormWrapper } from "../../FormWrapper";

type AccountData = {
  goal: string;
  team: string;
  strengths: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  goal,
  team,
  strengths,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>What do you hope to achieve by attending?</label>
      <input
        required
        type="text"
        value={goal}
        onChange={(e) => updateFields({ goal: e.target.value })}
      />
      <label>Are you joining as a team or an individual?</label>
      <select
        value={team}
        onChange={(e) => updateFields({ team: e.target.value })}
      >
        <option value="Team">Team</option>
        <option value="Individual">Individual</option>
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

import Grid from "@/components/ui/Grid/Grid";
import classes from "./AutomaticallyCreatedDiscountForm.module.scss";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";

export default function AutomaticallyCreatedDiscountForm({}) {
	return (
		<div className={classes.AutomaticallyCreatedDiscountForm}>
			<Grid columns="1fr 1fr">
				<div>
					<Label>Type</Label>
					<Select
            placeholder="Please select a discount type"
						options={[
							{ label: "Percentage Off", value: "percentage" },
							{ label: "Fixed", value: "fixed" },
						]}
					/>
				</div>
				<div>
					<Label>Discount Amount</Label>
					<input type="text" />
				</div>
			</Grid>
		</div>
	);
}

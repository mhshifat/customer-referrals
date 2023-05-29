import Grid from "@/components/ui/Grid/Grid";
import classes from "./AutomaticallyCreatedDiscountForm.module.scss";
import Label from "@/components/ui/Label/Label";
import Select from "@/components/ui/Select/Select";
import Input from "@/components/ui/Input/Input";
import Checkbox from "@/components/ui/Checkbox/Checkbox";
import HelperText from "@/components/partials/HelperText/HelperText";
import Divider from "@/components/ui/Divider/Divider";
import Accordion from "@/components/ui/Accordion";
import classnames from "classnames";
import { Poppins } from "next/font/google";
import DisableArea from "@/components/partials/DisableArea/DisableArea";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

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
					<Input type="text" append={<span>% Off</span>} />
				</div>
			</Grid>
			<Grid columns="1fr 1fr">
				<div>
					<Label>Minimum Order Amount</Label>
					<Input type="text" prepend={<span>$</span>} />
				</div>
				<div>
					<Label>Discount Applies To</Label>
					<Select
						placeholder="All Products"
						options={[{ label: "All Products", value: "all-products" }]}
					/>
				</div>
			</Grid>
			<div>
				<Label>Discount Code Expiration</Label>
				<Input
					placeholder="Set this value to 0 if you want the discount never to expire"
					type="text"
				/>
			</div>
			<HelperText
					text={
						<>Discount codes will only be valid when used by a new customer.</>
					}
				>
					<Checkbox
						text={<span>Restrict offer to first-time customers</span>}
					/>
				</HelperText>

        <DisableArea>
          <HelperText
            text={
              <>
                If you have ReCharge integration enabled on the integrations page,
                you can allow Friends to use their referral discount codes on
                subscription products. Note that ReCharge doesn&apos;t support certain
                features, such as minimum order amount or limiting by
                product/collection.
              </>
            }
          >
            <Checkbox
              text={
                <span>
                  Discount codes will only be valid when used by a new customer.
                </span>
              }
            />
          </HelperText>
        </DisableArea>
		</div>
	);
}

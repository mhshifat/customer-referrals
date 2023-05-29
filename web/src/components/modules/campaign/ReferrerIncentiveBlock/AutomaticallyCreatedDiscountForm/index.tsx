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

			<div>
				<HelperText
					text={
						<>
							If you have ReCharge integration enabled on the integrations page,
							you can allow Friends to use their referral discount codes on
							subscription products. Note that ReCharge doesn&apos;t support
							certain features, such as minimum order amount or limiting by
							product/collection.
						</>
					}
				>
					<Checkbox
						text={<span>Also create discount codes in ReCharge</span>}
					/>
				</HelperText>

				<Divider />

				<Accordion>
					<Accordion.Item
						trigger={
							<span
								className={classnames(
									classes.AutomaticallyCreatedDiscountForm__SectionTitle,
									poppins.className
								)}
							>
								More Referrer Incentive Options
							</span>
						}
					>
						<div
							className={classes.AutomaticallyCreatedDiscountForm__SectionBody}
						>
							<HelperText
								text={
									<>
										Each unique referral will only be allowed to be claimed once
										BY ANY CUSTOMER. For this reason, we recommend you use this
										option with shares by email only — NOT if you plan to allow
										Facebook, Twitter, or direct link shares. It also cannot be
										used with the &apos;Unique to each referrers&apos; Referral
										Link Type option below.
									</>
								}
							>
								<Checkbox
									text={
										<span>
											Only allow one claim per referral (NOT RECOMMENDED)
										</span>
									}
								/>
							</HelperText>

							<HelperText
								text={
									<>
										Use this setting to limit how many successful referrals a
										referrers can be rewarded for. Set this value to 0 if you
										want the referrer to be allowed to have an unlimited number
										of rewards.
									</>
								}
							>
								<div>
									<Label>Maximum Allowed Referrer Rewards</Label>
									<Input
										placeholder="Set 0 for an unlimited rewards."
										type="number"
									/>
								</div>
							</HelperText>

							<HelperText
								text={
									<>
										This number represents how many successful referrals a
										referrers must make to receive their reward. By default,
										it&apos;s set to 1, which means that the referrer will receive a
										reward each time a successful referral is made. If, for
										example, you set it to 3 instead, the Advocate will need 3
										referred Friends to make a purchase before they receive
										their reward.
									</>
								}
							>
								<div>
									<Label>Referrer Reward Ratio</Label>
									<Input
										placeholder="Set 0 for an unlimited rewards."
										type="number"
										value="1"
                    onChange={() => {}}
									/>
								</div>
							</HelperText>
						</div>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
}

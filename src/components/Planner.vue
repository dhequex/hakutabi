<template>
	<div>
		<v-container v-if="getTrip.length > 0">
			<v-card class="mt-5 mb-8 pa-2">
				<v-row>
					<v-card-title dark>My Trip</v-card-title>
				</v-row>
				<v-row>
					<span v-for="activity in getTrip" :key="activity.id">
						<v-col cols="12">
							<v-card class="pa-2" tile>
								{{ activity.title }}
								<v-avatar size="56">
									<img :src="`${activity.photo}`" />
								</v-avatar>
							</v-card>
						</v-col>
					</span>
				</v-row>
				<v-card-actions>
					<v-btn color="orange" text @click="sendPlan">
						Send to My Email
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-container>
	</div>
</template>
<script>
import { store } from "../store.js";
require("dotenv").config();

// const SibApiV3Sdk = require("sib-api-v3-sdk");
// const defaultClient = SibApiV3Sdk.ApiClient.instance;
// const fetch = require("node-fetch");
// // Configure API key authorization: api-key
// let apiKey = defaultClient.authentications["api-key"];
// apiKey.apiKey = `${process.env.SENDINBLUE_API}`;

// let url = "https://api.sendinblue.com/v3/smtp/email";

// let options = {
// 	method: "POST",
// 	headers: {
// 		Accept: "application/json",
// 		"Content-Type": "application/json",
// 		"api-key": `${process.env.SENDINBLUE_API}`,
// 	},
// 	body:
// 		'{"to":[{"email":"jmtorresr@gmail.com","name":"Jose"}],"replyTo":{"email":"info@hakutabi.app","name":"HAKUTABI"},"headers":{"newKey":"New Value"},"tags":["Plan"],"templateId":2}',
// };

export default {
	name: "Planner",

	computed: {
		getTrip() {
			return this.$store.getters.getTrip;
		},
		getPhoto() {
			return this.$store.getters.getTrip.photo;
		},
		// sendPlan() {
		// 	fetch(url, options)
		// 		.then(res => res.json())
		// 		.then(json => console.log(json))
		// 		.catch(err => console.error("error:" + err));
		// },
	},
};
</script>

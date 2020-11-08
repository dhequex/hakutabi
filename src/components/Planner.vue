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
									<img :src="`${activity.photo}`">
								</v-avatar>
							</v-card>
						</v-col>
					</span>
				</v-row>
        	<v-card-actions>
					<v-btn color="orange" text @click="mailto">
						Send to My Email
					</v-btn>
        	</v-card-actions>
			</v-card>
		</v-container>
	</div>
</template>
<script>
import { store } from "../store.js";

export default {
	name: "Planner",

	computed: {
		getTrip() {
			return this.$store.getters.getTrip;
		},
		getPhoto() {
			return this.$store.getters.getTrip.photo;
		},
	},
};
</script>

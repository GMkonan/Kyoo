import { t } from "elysia";
import { comment } from "~/utils";

export const Progress = t.Object({
	percent: t.Integer({ minimum: 0, maximum: 100 }),
	time: t.Integer({
		minimum: 0,
		description: comment`
			When this episode was stopped (in seconds since the start).
			This value is null if the entry was never watched or is finished.
		`,
	}),
	playedDate: t.Nullable(t.Date()),
	videoId: t.Nullable(
		t.String({
			format: "uuid",
			description: comment`
				Id of the video the user watched.
				This can be used to resume playback in the correct video file
				without asking the user what video to play.

				This will be null if the user did not watch the entry or
				if the video was deleted since.
			`,
		}),
	),
});
export type Progress = typeof Progress.static;

export const SeedHistory = t.Intersect([
	Progress,
	t.Object({
		entry: t.String({
			description: "Id or slug of the entry/movie you watched",
		}),
		external: t.Optional(
			t.Boolean({
				description: comment`
					Set this to true if the user marked the entry as watched
					without actually watching it on kyoo.

					If true, it will not add it to the history but still mark it as
					seen.
				`,
				default: false,
			}),
		),
	}),
]);
export type SeedHistory = typeof SeedHistory.static;

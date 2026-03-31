ALTER TABLE "kyoo"."history" ADD COLUMN "external" boolean;--> statement-breakpoint
UPDATE "kyoo"."history" SET "external" = false;--> statement-breakpoint
ALTER TABLE "kyoo"."history" ALTER COLUMN "external" SET NOT NULL;--> statement-breakpoint

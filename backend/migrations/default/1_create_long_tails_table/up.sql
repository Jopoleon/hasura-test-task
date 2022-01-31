CREATE TABLE IF NOT EXISTS "public"."long_tails"
(
    "tail" text NOT NULL,
    "json_id" integer NOT NULL,
    PRIMARY KEY ("json_id","tail") ,
    UNIQUE ("tail"),
    UNIQUE ("json_id")
);

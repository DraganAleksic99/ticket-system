SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '175f6d1e-88a7-4f5e-8f7e-50fd9dfaec7c', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"mail@gmail.com","user_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","user_phone":""}}', '2024-12-19 21:11:10.681361+00', ''),
	('00000000-0000-0000-0000-000000000000', '24faa6a4-2354-4204-8988-0b79b6c656bc', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-12-19 22:05:26.89213+00', ''),
	('00000000-0000-0000-0000-000000000000', '0b8c8d2f-6b5f-4211-b34e-ccccc56a1219', '{"action":"logout","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-19 22:43:21.787805+00', ''),
	('00000000-0000-0000-0000-000000000000', 'da70726b-0200-4fe7-bd82-ed104fd3cd10', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-12-19 22:53:33.398524+00', ''),
	('00000000-0000-0000-0000-000000000000', '3cc77e71-68d2-4b67-8a1b-e366ce0f974d', '{"action":"logout","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-19 23:51:02.087806+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c4cc23c7-3606-4620-af44-c0ccb0e0c4ce', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-12-19 23:51:31.192982+00', ''),
	('00000000-0000-0000-0000-000000000000', '4d3562d9-a544-4b8e-af81-a7210e1851b2', '{"action":"logout","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-19 23:51:38.938177+00', ''),
	('00000000-0000-0000-0000-000000000000', '47821839-ca4d-4577-a30e-4333c15faac7', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-12-19 23:52:03.679829+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fa31397e-bf46-418e-bb89-d398e34af915', '{"action":"logout","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 00:04:32.183271+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aad58b0c-67ed-4136-ad15-57c298d0011a', '{"action":"user_recovery_requested","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"user"}', '2024-12-20 00:17:08.767964+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bd95f19e-035e-4544-bf80-4c2af746c387', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 00:19:17.726045+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a55779a4-ee72-4e67-abd8-4d34ee3e1a0b', '{"action":"user_recovery_requested","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"user"}', '2024-12-20 00:23:38.429455+00', ''),
	('00000000-0000-0000-0000-000000000000', '7df92471-84c5-4d2a-873d-f28fca066706', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 00:24:10.013971+00', ''),
	('00000000-0000-0000-0000-000000000000', '5b617af9-4346-4197-a14e-7689a390bfe9', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-12-20 00:24:55.059785+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0a5a8f3-c0c2-45bf-a5e3-8fa3cf102970', '{"action":"logout","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 00:25:01.547622+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f9b50706-d027-4f61-b019-152226c8f3a5', '{"action":"user_recovery_requested","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"user"}', '2024-12-20 00:26:11.048097+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e7b9b1f-88e7-4c2b-8227-35721a835cdf', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 00:27:17.298074+00', ''),
	('00000000-0000-0000-0000-000000000000', '05a955b6-3ddc-4b77-bcb0-afda9545957c', '{"action":"user_recovery_requested","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"user"}', '2024-12-20 00:29:04.536746+00', ''),
	('00000000-0000-0000-0000-000000000000', '3a97c129-ad8f-4e5f-aacd-e54c4f009454', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 00:29:13.361433+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a5b2ee48-6725-4c5b-9b12-111e6723f810', '{"action":"user_recovery_requested","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"user"}', '2024-12-20 00:31:09.272943+00', ''),
	('00000000-0000-0000-0000-000000000000', '6cc4900c-be99-4cdb-a59a-548df2709762', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 00:31:20.709493+00', ''),
	('00000000-0000-0000-0000-000000000000', '007ec411-fb63-4b6b-9b8b-0748d15fc4b8', '{"action":"user_recovery_requested","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"user"}', '2024-12-20 00:35:15.572325+00', ''),
	('00000000-0000-0000-0000-000000000000', '6521a148-f552-47bc-af2b-cf3562026d70', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 00:35:24.859254+00', ''),
	('00000000-0000-0000-0000-000000000000', '3e850fa1-5c17-48c9-bc21-7ad89b4a1e67', '{"action":"user_recovery_requested","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"user"}', '2024-12-20 00:46:14.266302+00', ''),
	('00000000-0000-0000-0000-000000000000', '3c753779-d05d-4d9d-9e90-9e0ff10fce5c', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 00:46:30.741975+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a130633b-1c6d-4bb7-97ac-5d4bfef9360a', '{"action":"user_recovery_requested","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"user"}', '2024-12-20 18:39:31.343026+00', ''),
	('00000000-0000-0000-0000-000000000000', '1c4b2d3f-fbee-45f0-928f-9f4fbd922dd3', '{"action":"login","actor_id":"a2a96717-9eb8-4524-a710-55ae92c854d7","actor_username":"mail@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-12-20 18:39:51.962956+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('dd91d3df-799e-410a-8ce1-229d90bb981b', 'a2a96717-9eb8-4524-a710-55ae92c854d7', '138851fd-e6d8-4eb7-bb54-30db51527acc', 's256', 'tzMK2Ex714IAR7p6IJI4EUTcPnXOPjwLSp2Jtlp25Ms', 'magiclink', '', '', '2024-12-20 00:17:08.733989+00', '2024-12-20 00:19:17.749336+00', 'magiclink', '2024-12-20 00:19:17.749201+00'),
	('6b0309e2-06d8-4a94-aee7-e774fb01225d', 'a2a96717-9eb8-4524-a710-55ae92c854d7', 'eec99da6-7bba-4002-90ae-4b218cda0357', 's256', 'MtWWfYhZaYzQPuAVHWSN9BCDMRYDqpAEGcrvtx9RIks', 'magiclink', '', '', '2024-12-20 00:23:38.426406+00', '2024-12-20 00:24:10.018983+00', 'magiclink', '2024-12-20 00:24:10.018911+00'),
	('25e320fa-fbb2-444c-aa4a-ffa85674468f', 'a2a96717-9eb8-4524-a710-55ae92c854d7', '8609ae4b-7c55-4e04-9cf5-dabf5603e098', 's256', 'W420XdCGMpa_aSAAjhkCU1As6Y1fYLNymuxJ47dgBL8', 'magiclink', '', '', '2024-12-20 00:26:11.045396+00', '2024-12-20 00:27:17.30322+00', 'magiclink', '2024-12-20 00:27:17.303151+00'),
	('91138c8b-ab47-4fa7-9a8d-0ea062cc5f13', 'a2a96717-9eb8-4524-a710-55ae92c854d7', '01d3f0e8-4b61-43f1-b66e-0a4fc01ff5a4', 's256', 'ygSX_8-C6erYwKQWeNN3I-a_8788dICIVBLWpxRoafI', 'magiclink', '', '', '2024-12-20 00:29:04.534395+00', '2024-12-20 00:29:13.366087+00', 'magiclink', '2024-12-20 00:29:13.366038+00'),
	('bb27cc33-e7e5-4c77-9aca-0fe205c36a76', 'a2a96717-9eb8-4524-a710-55ae92c854d7', '46574a69-9208-4e1a-9b4b-d06cd5753a8c', 's256', 'fjv9hQBuZ0I7IeZEdkZ1BWAaxwVRwVCM39pMVtr01S8', 'magiclink', '', '', '2024-12-20 00:31:09.270718+00', '2024-12-20 00:31:20.714285+00', 'magiclink', '2024-12-20 00:31:20.714035+00'),
	('b766e70a-05c2-4dd9-9a2d-1f446a6bfb11', 'a2a96717-9eb8-4524-a710-55ae92c854d7', '11b9287f-c88a-4302-9e0c-4b5956856fcf', 's256', '3ChrmDC1Eq4vCZrtUN1h6rEAspzpXOqP1h7uxIzldkM', 'magiclink', '', '', '2024-12-20 00:35:15.548155+00', '2024-12-20 00:35:24.861977+00', 'magiclink', '2024-12-20 00:35:24.861939+00'),
	('5ef2278b-dab3-4b06-9795-88342f2c1f83', 'a2a96717-9eb8-4524-a710-55ae92c854d7', '7bf03ba8-6cae-47df-a980-67417c7388c7', 's256', 'qPXluK7Vy8S5efuymDa2LkIvo0WJ7If2dYrMMgt9KNI', 'magiclink', '', '', '2024-12-20 00:46:14.259371+00', '2024-12-20 00:46:30.748467+00', 'magiclink', '2024-12-20 00:46:30.748407+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'a2a96717-9eb8-4524-a710-55ae92c854d7', 'authenticated', 'authenticated', 'mail@gmail.com', '$2a$10$NqMIswFotUTHxz.icPRSheuhhxE6b9M2SNqVsLWhkcHDc0ciqDd4W', '2024-12-19 21:11:10.686959+00', NULL, '', NULL, '', '2024-12-20 18:39:31.33914+00', '', '', NULL, '2024-12-20 18:39:51.971484+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-12-19 21:11:10.662021+00', '2024-12-20 18:39:51.994282+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('a2a96717-9eb8-4524-a710-55ae92c854d7', 'a2a96717-9eb8-4524-a710-55ae92c854d7', '{"sub": "a2a96717-9eb8-4524-a710-55ae92c854d7", "email": "mail@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-12-19 21:11:10.675193+00', '2024-12-19 21:11:10.678697+00', '2024-12-19 21:11:10.678697+00', '1bcd6528-48db-4d06-9472-6e48c035da57');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('a95f87e6-8d8c-43a8-8cf8-a3b6e551de5c', 'a2a96717-9eb8-4524-a710-55ae92c854d7', '2024-12-20 18:39:51.971602+00', '2024-12-20 18:39:51.971602+00', NULL, 'aal1', NULL, NULL, 'node', '172.25.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('a95f87e6-8d8c-43a8-8cf8-a3b6e551de5c', '2024-12-20 18:39:51.995257+00', '2024-12-20 18:39:51.995257+00', 'otp', '745e2094-dc8c-41ee-be84-2d7f8c251e68');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 6, '4BZn1nCvhK_AsC0crQqTSQ', 'a2a96717-9eb8-4524-a710-55ae92c854d7', false, '2024-12-20 18:39:51.980156+00', '2024-12-20 18:39:51.980156+00', NULL, 'a95f87e6-8d8c-43a8-8cf8-a3b6e551de5c');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: service-users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."service-users" ("id", "created_at", "full_name", "supabase_user") VALUES
	(1, '2024-12-20 21:34:48.389802+00', 'Dragan Aleksic', 'a2a96717-9eb8-4524-a710-55ae92c854d7');


--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "created_at", "name", "domain") VALUES
	('packt', '2024-12-20 20:07:12.608665+00', 'Packt Publishing', 'packt.local'),
	('oddmonkey', '2024-12-20 20:08:07.479073+00', 'OddMonkey Inc', 'oddmonkey.inc'),
	('dragan-org', '2024-12-20 20:08:47.992314+00', 'Dragans''s Org', 'org.dragan');


--
-- Data for Name: tenant-permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenant-permissions" ("id", "created_at", "service_user", "tenant") VALUES
	(1, '2024-12-20 22:00:57.214679+00', 1, 'packt'),
	(2, '2024-12-20 22:01:52.112601+00', 1, 'oddmonkey');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 6, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: service-users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."service-users_id_seq"', 1, true);


--
-- Name: tenant-permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenant-permissions_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;

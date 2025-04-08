--
-- PostgreSQL database dump
--

-- Dumped from database version 15.12 (Debian 15.12-1.pgdg120+1)
-- Dumped by pg_dump version 15.12 (Debian 15.12-1.pgdg120+1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: accounts_user; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.accounts_user (
    id bigint NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    email character varying(254) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    is_admin boolean NOT NULL,
    is_active boolean NOT NULL,
    is_staff boolean NOT NULL
);


ALTER TABLE public.accounts_user OWNER TO admin;

--
-- Name: accounts_user_groups; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.accounts_user_groups (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.accounts_user_groups OWNER TO admin;

--
-- Name: accounts_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.accounts_user_groups ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: accounts_user_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.accounts_user ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: accounts_user_user_permissions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.accounts_user_user_permissions (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.accounts_user_user_permissions OWNER TO admin;

--
-- Name: accounts_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.accounts_user_user_permissions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.accounts_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO admin;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.auth_group ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.auth_group_permissions (
    id bigint NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO admin;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.auth_group_permissions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO admin;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.auth_permission ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id bigint NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO admin;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.django_admin_log ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_apscheduler_djangojob; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.django_apscheduler_djangojob (
    id character varying(255) NOT NULL,
    next_run_time timestamp with time zone,
    job_state bytea NOT NULL
);


ALTER TABLE public.django_apscheduler_djangojob OWNER TO admin;

--
-- Name: django_apscheduler_djangojobexecution; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.django_apscheduler_djangojobexecution (
    id bigint NOT NULL,
    status character varying(50) NOT NULL,
    run_time timestamp with time zone NOT NULL,
    duration numeric(15,2),
    finished numeric(15,2),
    exception character varying(1000),
    traceback text,
    job_id character varying(255) NOT NULL
);


ALTER TABLE public.django_apscheduler_djangojobexecution OWNER TO admin;

--
-- Name: django_apscheduler_djangojobexecution_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.django_apscheduler_djangojobexecution ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_apscheduler_djangojobexecution_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO admin;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.django_content_type ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.django_migrations (
    id bigint NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO admin;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.django_migrations ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO admin;

--
-- Name: events_events; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.events_events (
    id bigint NOT NULL,
    title character varying(200) NOT NULL,
    description text NOT NULL,
    genre character varying(100) NOT NULL,
    duration interval,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    location character varying(255) NOT NULL,
    site character varying(200) NOT NULL,
    venue character varying(200) NOT NULL,
    price numeric(10,2) NOT NULL,
    artist character varying(100) NOT NULL,
    artist_short_description text NOT NULL,
    why_attend text NOT NULL,
    capacity integer NOT NULL,
    image character varying(100),
    image_artist character varying(100),
    created_by_id bigint NOT NULL,
    CONSTRAINT events_events_capacity_check CHECK ((capacity >= 0))
);


ALTER TABLE public.events_events OWNER TO admin;

--
-- Name: events_events_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.events_events ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.events_events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: reviews_review; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.reviews_review (
    id bigint NOT NULL,
    description text NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.reviews_review OWNER TO admin;

--
-- Name: reviews_review_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.reviews_review ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.reviews_review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: rsvp_rsvp; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.rsvp_rsvp (
    id bigint NOT NULL,
    status character varying(20) NOT NULL,
    event_id bigint NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.rsvp_rsvp OWNER TO admin;

--
-- Name: rsvp_rsvp_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.rsvp_rsvp ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.rsvp_rsvp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: accounts_user; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.accounts_user (id, password, last_login, is_superuser, email, first_name, last_name, is_admin, is_active, is_staff) FROM stdin;
1	pbkdf2_sha256$720000$ffxFKnU1J2B10Ouc9c8dho$jzJyfdEcZB/GPMWAcb5oUlb0jprwuUhef5HaI4AQg+8=	\N	t	baljeetism@gmail.com	baljeet	singh	t	t	t
2	pbkdf2_sha256$720000$Xv280UJ3Yz0vdqbHtJTy08$qmjNSdcByt6nBD4UFkqsbek/a8EJgttYroCxaHWMBtw=	\N	f	bs7641253@gmail.com	Baljeet	Singh	t	t	t
\.


--
-- Data for Name: accounts_user_groups; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.accounts_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: accounts_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.accounts_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add content type	4	add_contenttype
14	Can change content type	4	change_contenttype
15	Can delete content type	4	delete_contenttype
16	Can view content type	4	view_contenttype
17	Can add session	5	add_session
18	Can change session	5	change_session
19	Can delete session	5	delete_session
20	Can view session	5	view_session
21	Can add user	6	add_user
22	Can change user	6	change_user
23	Can delete user	6	delete_user
24	Can view user	6	view_user
25	Can add events	7	add_events
26	Can change events	7	change_events
27	Can delete events	7	delete_events
28	Can view events	7	view_events
29	Can add RSVP	8	add_rsvp
30	Can change RSVP	8	change_rsvp
31	Can delete RSVP	8	delete_rsvp
32	Can view RSVP	8	view_rsvp
33	Can add django job	9	add_djangojob
34	Can change django job	9	change_djangojob
35	Can delete django job	9	delete_djangojob
36	Can view django job	9	view_djangojob
37	Can add django job execution	10	add_djangojobexecution
38	Can change django job execution	10	change_djangojobexecution
39	Can delete django job execution	10	delete_djangojobexecution
40	Can view django job execution	10	view_djangojobexecution
41	Can add review	11	add_review
42	Can change review	11	change_review
43	Can delete review	11	delete_review
44	Can view review	11	view_review
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
\.


--
-- Data for Name: django_apscheduler_djangojob; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.django_apscheduler_djangojob (id, next_run_time, job_state) FROM stdin;
event_reminders	2025-04-07 18:18:47.126663+00	\\x80059518020000000000007d94288c0776657273696f6e944b018c026964948c0f6576656e745f72656d696e64657273948c0466756e63948c256576656e74732e7461736b733a636865636b5f616e645f73656e645f72656d696e64657273948c0774726967676572948c1d61707363686564756c65722e74726967676572732e696e74657276616c948c0f496e74657276616c547269676765729493942981947d942868014b028c0874696d657a6f6e65948c086275696c74696e73948c07676574617474729493948c087a6f6e65696e666f948c085a6f6e65496e666f9493948c095f756e7069636b6c6594869452948c0c417369612f4b6f6c6b617461944b01869452948c0a73746172745f64617465948c086461746574696d65948c086461746574696d65949394430a07e9040717302f01eec7946818869452948c08656e645f64617465944e8c08696e74657276616c94681a8c0974696d6564656c74619493944b004d201c4b00879452948c066a6974746572944e75628c086578656375746f72948c0764656661756c74948c046172677394298c066b7761726773947d948c046e616d65948c18636865636b5f616e645f73656e645f72656d696e64657273948c126d6973666972655f67726163655f74696d65944b018c08636f616c6573636594888c0d6d61785f696e7374616e636573944b018c0d6e6578745f72756e5f74696d6594681c430a07e9040717302f01eec794681886945294752e
delete_old_job_executions	2025-04-08 16:18:47.12718+00	\\x8005950d020000000000007d94288c0776657273696f6e944b018c026964948c1964656c6574655f6f6c645f6a6f625f657865637574696f6e73948c0466756e63948c2a6576656e74732e7363686564756c65723a64656c6574655f6f6c645f6a6f625f657865637574696f6e73948c0774726967676572948c1d61707363686564756c65722e74726967676572732e696e74657276616c948c0f496e74657276616c547269676765729493942981947d942868014b028c0874696d657a6f6e65948c086275696c74696e73948c07676574617474729493948c087a6f6e65696e666f948c085a6f6e65496e666f9493948c095f756e7069636b6c6594869452948c0c417369612f4b6f6c6b617461944b01869452948c0a73746172745f64617465948c086461746574696d65948c086461746574696d65949394430a07e9040815302f01f0cc946818869452948c08656e645f64617465944e8c08696e74657276616c94681a8c0974696d6564656c74619493944b014b004b00879452948c066a6974746572944e75628c086578656375746f72948c0764656661756c74948c046172677394298c066b7761726773947d948c046e616d659468038c126d6973666972655f67726163655f74696d65944b018c08636f616c6573636594888c0d6d61785f696e7374616e636573944b018c0d6e6578745f72756e5f74696d6594681c430a07e9040815302f01f0cc94681886945294752e
\.


--
-- Data for Name: django_apscheduler_djangojobexecution; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.django_apscheduler_djangojobexecution (id, status, run_time, duration, finished, exception, traceback, job_id) FROM stdin;
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	contenttypes	contenttype
5	sessions	session
6	accounts	user
7	events	events
8	rsvp	rsvp
9	django_apscheduler	djangojob
10	django_apscheduler	djangojobexecution
11	reviews	review
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2025-04-07 08:58:11.501795+00
2	contenttypes	0002_remove_content_type_name	2025-04-07 08:58:11.524114+00
3	auth	0001_initial	2025-04-07 08:58:11.660313+00
4	auth	0002_alter_permission_name_max_length	2025-04-07 08:58:11.673543+00
5	auth	0003_alter_user_email_max_length	2025-04-07 08:58:11.688347+00
6	auth	0004_alter_user_username_opts	2025-04-07 08:58:11.705875+00
7	auth	0005_alter_user_last_login_null	2025-04-07 08:58:11.722523+00
8	auth	0006_require_contenttypes_0002	2025-04-07 08:58:11.728584+00
9	auth	0007_alter_validators_add_error_messages	2025-04-07 08:58:11.745171+00
10	auth	0008_alter_user_username_max_length	2025-04-07 08:58:11.761626+00
11	auth	0009_alter_user_last_name_max_length	2025-04-07 08:58:11.779408+00
12	auth	0010_alter_group_name_max_length	2025-04-07 08:58:11.796341+00
13	auth	0011_update_proxy_permissions	2025-04-07 08:58:11.810769+00
14	auth	0012_alter_user_first_name_max_length	2025-04-07 08:58:11.82498+00
15	accounts	0001_initial	2025-04-07 08:58:11.961875+00
16	admin	0001_initial	2025-04-07 08:58:12.025597+00
17	admin	0002_logentry_remove_auto_add	2025-04-07 08:58:12.045198+00
18	admin	0003_logentry_add_action_flag_choices	2025-04-07 08:58:12.065868+00
19	django_apscheduler	0001_initial	2025-04-07 08:58:12.175978+00
20	django_apscheduler	0002_auto_20180412_0758	2025-04-07 08:58:12.189+00
21	django_apscheduler	0003_auto_20200716_1632	2025-04-07 08:58:12.243121+00
22	django_apscheduler	0004_auto_20200717_1043	2025-04-07 08:58:12.368284+00
23	django_apscheduler	0005_migrate_name_to_id	2025-04-07 08:58:12.402058+00
24	django_apscheduler	0006_remove_djangojob_name	2025-04-07 08:58:12.415462+00
25	django_apscheduler	0007_auto_20200717_1404	2025-04-07 08:58:12.468479+00
26	django_apscheduler	0008_remove_djangojobexecution_started	2025-04-07 08:58:12.482061+00
27	django_apscheduler	0009_djangojobexecution_unique_job_executions	2025-04-07 08:58:12.502371+00
28	events	0001_initial	2025-04-07 08:58:12.558983+00
29	reviews	0001_initial	2025-04-07 08:58:12.631729+00
30	reviews	0002_remove_review_event	2025-04-07 08:58:12.662226+00
31	rsvp	0001_initial	2025-04-07 08:58:12.739586+00
32	rsvp	0002_alter_rsvp_unique_together_remove_rsvp_user	2025-04-07 08:58:12.793558+00
33	rsvp	0003_rsvp_user_alter_rsvp_unique_together	2025-04-07 08:58:12.862381+00
34	rsvp	0004_alter_rsvp_status	2025-04-07 08:58:12.888347+00
35	rsvp	0005_alter_rsvp_status	2025-04-07 08:58:12.912929+00
36	sessions	0001_initial	2025-04-07 08:58:12.965292+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
\.


--
-- Data for Name: events_events; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.events_events (id, title, description, genre, duration, date, "time", location, site, venue, price, artist, artist_short_description, why_attend, capacity, image, image_artist, created_by_id) FROM stdin;
\.


--
-- Data for Name: reviews_review; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.reviews_review (id, description, user_id) FROM stdin;
1	Professionalism at its peak!	1
2	Best Music Events are hosted by MOMENTO!!	1
3	Long Live John Doe	2
4	review check	2
\.


--
-- Data for Name: rsvp_rsvp; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.rsvp_rsvp (id, status, event_id, user_id) FROM stdin;
\.


--
-- Name: accounts_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.accounts_user_groups_id_seq', 1, false);


--
-- Name: accounts_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.accounts_user_id_seq', 2, true);


--
-- Name: accounts_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.accounts_user_user_permissions_id_seq', 1, false);


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 44, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);


--
-- Name: django_apscheduler_djangojobexecution_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.django_apscheduler_djangojobexecution_id_seq', 1, false);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 11, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 36, true);


--
-- Name: events_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.events_events_id_seq', 1, true);


--
-- Name: reviews_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.reviews_review_id_seq', 4, true);


--
-- Name: rsvp_rsvp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.rsvp_rsvp_id_seq', 2, true);


--
-- Name: accounts_user accounts_user_email_key; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user
    ADD CONSTRAINT accounts_user_email_key UNIQUE (email);


--
-- Name: accounts_user_groups accounts_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user_groups
    ADD CONSTRAINT accounts_user_groups_pkey PRIMARY KEY (id);


--
-- Name: accounts_user_groups accounts_user_groups_user_id_group_id_59c0b32f_uniq; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user_groups
    ADD CONSTRAINT accounts_user_groups_user_id_group_id_59c0b32f_uniq UNIQUE (user_id, group_id);


--
-- Name: accounts_user accounts_user_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user
    ADD CONSTRAINT accounts_user_pkey PRIMARY KEY (id);


--
-- Name: accounts_user_user_permissions accounts_user_user_permi_user_id_permission_id_2ab516c2_uniq; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user_user_permissions
    ADD CONSTRAINT accounts_user_user_permi_user_id_permission_id_2ab516c2_uniq UNIQUE (user_id, permission_id);


--
-- Name: accounts_user_user_permissions accounts_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user_user_permissions
    ADD CONSTRAINT accounts_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_apscheduler_djangojob django_apscheduler_djangojob_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_apscheduler_djangojob
    ADD CONSTRAINT django_apscheduler_djangojob_pkey PRIMARY KEY (id);


--
-- Name: django_apscheduler_djangojobexecution django_apscheduler_djangojobexecution_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_apscheduler_djangojobexecution
    ADD CONSTRAINT django_apscheduler_djangojobexecution_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: events_events events_events_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.events_events
    ADD CONSTRAINT events_events_pkey PRIMARY KEY (id);


--
-- Name: reviews_review reviews_review_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reviews_review
    ADD CONSTRAINT reviews_review_pkey PRIMARY KEY (id);


--
-- Name: rsvp_rsvp rsvp_rsvp_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.rsvp_rsvp
    ADD CONSTRAINT rsvp_rsvp_pkey PRIMARY KEY (id);


--
-- Name: rsvp_rsvp rsvp_rsvp_user_id_event_id_53723c50_uniq; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.rsvp_rsvp
    ADD CONSTRAINT rsvp_rsvp_user_id_event_id_53723c50_uniq UNIQUE (user_id, event_id);


--
-- Name: django_apscheduler_djangojobexecution unique_job_executions; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_apscheduler_djangojobexecution
    ADD CONSTRAINT unique_job_executions UNIQUE (job_id, run_time);


--
-- Name: accounts_user_email_b2644a56_like; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX accounts_user_email_b2644a56_like ON public.accounts_user USING btree (email varchar_pattern_ops);


--
-- Name: accounts_user_groups_group_id_bd11a704; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX accounts_user_groups_group_id_bd11a704 ON public.accounts_user_groups USING btree (group_id);


--
-- Name: accounts_user_groups_user_id_52b62117; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX accounts_user_groups_user_id_52b62117 ON public.accounts_user_groups USING btree (user_id);


--
-- Name: accounts_user_user_permissions_permission_id_113bb443; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX accounts_user_user_permissions_permission_id_113bb443 ON public.accounts_user_user_permissions USING btree (permission_id);


--
-- Name: accounts_user_user_permissions_user_id_e4f0a161; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX accounts_user_user_permissions_user_id_e4f0a161 ON public.accounts_user_user_permissions USING btree (user_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_apscheduler_djangojob_next_run_time_2f022619; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX django_apscheduler_djangojob_next_run_time_2f022619 ON public.django_apscheduler_djangojob USING btree (next_run_time);


--
-- Name: django_apscheduler_djangojobexecution_job_id_daf5090a; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX django_apscheduler_djangojobexecution_job_id_daf5090a ON public.django_apscheduler_djangojobexecution USING btree (job_id);


--
-- Name: django_apscheduler_djangojobexecution_run_time_16edd96b; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX django_apscheduler_djangojobexecution_run_time_16edd96b ON public.django_apscheduler_djangojobexecution USING btree (run_time);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: events_events_created_by_id_141fffbb; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX events_events_created_by_id_141fffbb ON public.events_events USING btree (created_by_id);


--
-- Name: reviews_review_user_id_875caff2; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX reviews_review_user_id_875caff2 ON public.reviews_review USING btree (user_id);


--
-- Name: rsvp_rsvp_event_id_0da58f53; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX rsvp_rsvp_event_id_0da58f53 ON public.rsvp_rsvp USING btree (event_id);


--
-- Name: rsvp_rsvp_user_id_bf7c1405; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX rsvp_rsvp_user_id_bf7c1405 ON public.rsvp_rsvp USING btree (user_id);


--
-- Name: accounts_user_groups accounts_user_groups_group_id_bd11a704_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user_groups
    ADD CONSTRAINT accounts_user_groups_group_id_bd11a704_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_user_groups accounts_user_groups_user_id_52b62117_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user_groups
    ADD CONSTRAINT accounts_user_groups_user_id_52b62117_fk_accounts_user_id FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_user_user_permissions accounts_user_user_p_permission_id_113bb443_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user_user_permissions
    ADD CONSTRAINT accounts_user_user_p_permission_id_113bb443_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_user_user_permissions accounts_user_user_p_user_id_e4f0a161_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts_user_user_permissions
    ADD CONSTRAINT accounts_user_user_p_user_id_e4f0a161_fk_accounts_ FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_accounts_user_id FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_apscheduler_djangojobexecution django_apscheduler_djangojobexecution_job_id_daf5090a_fk; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.django_apscheduler_djangojobexecution
    ADD CONSTRAINT django_apscheduler_djangojobexecution_job_id_daf5090a_fk FOREIGN KEY (job_id) REFERENCES public.django_apscheduler_djangojob(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: events_events events_events_created_by_id_141fffbb_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.events_events
    ADD CONSTRAINT events_events_created_by_id_141fffbb_fk_accounts_user_id FOREIGN KEY (created_by_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: reviews_review reviews_review_user_id_875caff2_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reviews_review
    ADD CONSTRAINT reviews_review_user_id_875caff2_fk_accounts_user_id FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rsvp_rsvp rsvp_rsvp_event_id_0da58f53_fk_events_events_id; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.rsvp_rsvp
    ADD CONSTRAINT rsvp_rsvp_event_id_0da58f53_fk_events_events_id FOREIGN KEY (event_id) REFERENCES public.events_events(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rsvp_rsvp rsvp_rsvp_user_id_bf7c1405_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.rsvp_rsvp
    ADD CONSTRAINT rsvp_rsvp_user_id_bf7c1405_fk_accounts_user_id FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--


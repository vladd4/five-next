"use client";

import { useDispatch } from "react-redux";
import styles from "./ProfileInfo.module.scss";
import { useState } from "react";
import { fetchUser, updateUser } from "@/redux/slices/userSlice";

export default function ProfileInfo({ user }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.surname);
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);
  const [telegram, setTelegram] = useState(user?.telegram);

  const handleUpdate = () => {
    const params = {
      userId: 1,
      name,
      surname: lastName,
      email,
      phone,
      telegram,
    };
    dispatch(updateUser(params));
    dispatch(fetchUser(1));
  };

  const handleResetUpdate = () => {
    dispatch(fetchUser(1));
  };
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.form_block}>
          <div className={styles.form_info}>
            <h1>Інформація</h1>
            <div className={styles.info_input}>
              <label className={styles.input_label}>First name</label>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.info_input}>
              <label className={styles.input_label}>Last name</label>
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={styles.info_input}>
              <label className={styles.input_label}>Phone</label>
              <input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.info_input}>
              <label className={styles.input_label}>Email</label>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.form_social}>
            <h1>Соц. мережі</h1>
            <div className={styles.info_input}>
              <label className={styles.input_label}>Telegram</label>
              <input
                placeholder="Telegram"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.button_block}>
          <button onClick={handleUpdate} className={styles.save_button}>
            Зберегти
          </button>
          <button onClick={handleResetUpdate} className={styles.cancel_button}>
            Скасувати
          </button>
        </div>
      </article>
    </section>
  );
}

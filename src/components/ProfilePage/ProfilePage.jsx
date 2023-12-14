"use client";

import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileSide from "../ProfileSide/ProfileSide";
import SavedSearch from "../SavedSearch/SavedSearch";

import styles from "./ProfilePage.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "@/redux/slices/userSlice";
import { fetchSaved } from "@/redux/slices/savedSlice";
import ProfileSkeleton from "../ProfileSkeleton";

export default function ProfilePage() {
  const users = useSelector((state) => state.users);
  const saved = useSelector((state) => state.saved);
  const dispatch = useDispatch();
  const userId = 1;

  useEffect(() => {
    dispatch(fetchUser(userId));
    dispatch(fetchSaved(userId));
  }, []);
  return (
    <section className={styles.root}>
      <ProfileSide user={users.user[0]} />
      <article className={styles.dynamic_block}>
        {users && users.user[0] ? (
          <ProfileInfo user={users.user[0]} />
        ) : (
          <ProfileSkeleton />
        )}
        <SavedSearch saved={saved.saved} />
      </article>
    </section>
  );
}

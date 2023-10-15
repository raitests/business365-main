import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import SearchBox from "../../components/blog/SearchBox";
import Category from "../../components/blog/Category";
import RecentPost from "../../components/blog/RecentPost";
import Tag from "../../components/blog/blog-details/Tag";
import SocialShare from "../../components/blog/blog-details/SocialShare";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blogsData from "../../data/blog";
import Image from "next/image";

const DynamicBlogDetails = () => {
  const router = useRouter();
  const [blog, setBlogItem] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setBlogItem(blogsData.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Dynamic Blog Details" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
			Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne text-center position-relative mt-150">
        <div className="container">
          <div className="row">
              <h2 className="blog-heading-one tx-dark">{blog?.title}</h2>
          </div>
        </div>
        {/* /.container */}
      </div>

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-details-one mt-80 lg-mt-60">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <article className="blog-details-content">
                    {blog.imageSrc && (
                      <Image
                        width={800}
                        height={500}
                        src={blog.imageSrc}
                        alt={blog.title}
                        className="lazy-img image-meta w-100"
                      />
                    )}
                    <p>
                    {blog?.description}
                    </p>
                    <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                      <Tag />
                      <SocialShare />
                    </div>
                    {/* /.bottom-widget */}
                  </article>
                  {/* /.blog-details-content */}
                </div>
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox />
                  </div>
                  {/* /.blog-sidebar-search */}

                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Category</h4>
                    <Category />
                  </div>
                  {/* /.blog-sidebar-category */}

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Recent News</h4>
                    <RecentPost />
                  </div>
                  {/* /.sidebar-recent-news */}
                </div>
                {/* /.blog-sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default DynamicBlogDetails;

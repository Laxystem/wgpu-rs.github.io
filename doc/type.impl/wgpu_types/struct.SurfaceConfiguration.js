(function() {var type_impls = {
"wgpu":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4983\">source</a><a href=\"#impl-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_view_formats\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4985\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu_types/struct.SurfaceConfiguration.html#tymethod.map_view_formats\" class=\"fn\">map_view_formats</a>&lt;M&gt;(\n    &amp;self,\n    fun: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(V) -&gt; M\n) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;M&gt;</h4></section></summary><div class=\"docblock\"><p>Map view_formats of the texture descriptor into another.</p>\n</div></details></div></details>",0,"wgpu::SurfaceConfiguration"],["<section id=\"impl-StructuralPartialEq-for-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#impl-StructuralPartialEq-for-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;</h3></section>","StructuralPartialEq","wgpu::SurfaceConfiguration"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#impl-Clone-for-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","wgpu::SurfaceConfiguration"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4957\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, V&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4957\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","wgpu::SurfaceConfiguration"],["<section id=\"impl-StructuralEq-for-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#impl-StructuralEq-for-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;</h3></section>","StructuralEq","wgpu::SurfaceConfiguration"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#impl-PartialEq-for-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","wgpu::SurfaceConfiguration"],["<section id=\"impl-Eq-for-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#impl-Eq-for-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</span></h3></section>","Eq","wgpu::SurfaceConfiguration"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#impl-Hash-for-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)<span class=\"where fmt-newline\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</span></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","wgpu::SurfaceConfiguration"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4956\">source</a><a href=\"#impl-Serialize-for-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4956\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.193/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","wgpu::SurfaceConfiguration"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SurfaceConfiguration%3CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#impl-Debug-for-SurfaceConfiguration%3CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"wgpu_types/struct.SurfaceConfiguration.html\" title=\"struct wgpu_types::SurfaceConfiguration\">SurfaceConfiguration</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4955\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wgpu::SurfaceConfiguration"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()